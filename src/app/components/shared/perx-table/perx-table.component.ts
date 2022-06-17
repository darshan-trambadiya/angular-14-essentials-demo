// external
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { get, map, size, toLower, trim, filter, reduce, join } from 'lodash';

// material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

// constants
import {
  PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
  PerxDisplayedColumns,
} from './perx-table.constant';

@Component({
  selector: 'perx-table',
  templateUrl: './perx-table.component.html',
  styleUrls: ['./perx-table.component.scss'],
})
export class PerxTableComponent implements OnInit, OnChanges {
  @Input() public displayedColumns!: PerxDisplayedColumns[];
  @Input() public tableData: any[] | null = null;
  @Input() public enablePagination: boolean = false;
  @Input() public enableSorting: boolean = false;
  @Input() public isLoading!: boolean;

  // pagination
  public pageSize: number = PAGE_SIZE;
  public pageSizeOptions: number[] = PAGE_SIZE_OPTIONS;
  public totalItems: number = 0;

  // input filter
  public filterApplicableColumnsList: string = '';

  // table
  public displayedColumnsRowValues!: string[];
  public dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) private paginator!: MatPaginator;
  @ViewChild(MatSort) private sort!: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    const tableData = get(changes, ['tableData', 'currentValue']);
    if (tableData) {
      this.dataSource = new MatTableDataSource(tableData);
      this.totalItems = tableData.length;
      this.setPaginationAndSorting();
      this.setCustomFilter();
    }
  }

  ngOnInit() {
    this.displayedColumnsRowValues = map(
      this.displayedColumns,
      (col) => col.value,
    );
    this.filterApplicableColumnsList = join(
      map(this.getEnableFilterColumns(), 'name'),
      ', ',
    );
  }

  /**
   * @description Apply Pagination and Sorting on dataSource if they are applicable
   */
  setPaginationAndSorting() {
    if (size(this.dataSource?.data)) {
      if (this.enablePagination && this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.enableSorting && this.sort) {
        this.dataSource.sort = this.sort;
      }
    }
  }

  /**
   * @description Make input filter works only on those columns which doesn't have disableFilter: true
   */
  setCustomFilter() {
    this.dataSource.filterPredicate = (data, input) => {
      const enableFilterKeys = map(this.getEnableFilterColumns(), 'value');

      const fullDataInOneString = reduce(
        enableFilterKeys,
        (sum, key) => {
          return sum + get(data, key);
        },
        '',
      );

      return toLower(fullDataInOneString).indexOf(toLower(trim(input))) != -1;
    };
  }

  /**
   * @description Filter table data based on input
   * @param event: Event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * @description Get only those columns which doesn't have disableFilter: true
   */
  getEnableFilterColumns() {
    return filter(this.displayedColumns, (col) => !col.disableFilter);
  }
}
