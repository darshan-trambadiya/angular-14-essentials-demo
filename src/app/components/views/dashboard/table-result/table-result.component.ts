// external
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { map as lmap, get, set } from 'lodash';
import * as moment from 'moment';

// services
import { TableDataService } from 'src/app/services/table-data.service';

// constants
import { PerxDisplayedColumns } from 'src/app/components/shared/perx-table/perx-table.constant';

@Component({
  selector: 'perx-table-result',
  templateUrl: './table-result.component.html',
})
export class TableResultComponent implements OnInit {
  public displayedColumns: PerxDisplayedColumns[] = [
    { name: 'ID', value: 'id' },
    { name: 'Content', value: 'contentName' },
    {
      name: 'Image',
      value: 'attributes.display_properties.image',
      type: 'image',
      disableSort: true,
      disableFilter: true,
    },
    {
      name: 'Created At',
      value: 'attributes.created_at',
      disableSort: true,
      disableFilter: true,
    },
  ];
  public tableData$!: Observable<any[]>;
  public isLoading: boolean = true;

  constructor(private tableDataService: TableDataService) {}

  ngOnInit(): void {
    this.tableData$ = this.tableDataService.getTableData().pipe(
      map((response: any) => {
        const createdAtPath = 'attributes.created_at';

        const finalResult = lmap(response?.data, (r) => {
          const createdAtDate = get(r, createdAtPath);

          createdAtDate &&
            set(r, createdAtPath, moment(createdAtDate).format('MM-DD-YYYY'));

          const contentName = get(r, 'attributes.content');
          contentName && set(r, 'contentName', contentName);

          return r;
        });

        return finalResult || [];
      }),
      tap(() => (this.isLoading = false)),
    );
  }
}
