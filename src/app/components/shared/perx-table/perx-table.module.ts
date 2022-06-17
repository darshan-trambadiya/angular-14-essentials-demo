// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

// modules
import { PerxLoaderModule } from '../perx-loader/perx-loader.module';

// components
import { PerxTableComponent } from './perx-table.component';

// pipes
import { CustomPipesModule } from '../../../pipes/custom-pipes.module';

@NgModule({
  declarations: [PerxTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    PerxLoaderModule,
    CustomPipesModule,
  ],
  exports: [PerxTableComponent],
})
export class PerxTableModule {}
