// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pipes
import { GetColumnValuePipe } from './get-column-value.pipe';

@NgModule({
  declarations: [GetColumnValuePipe],
  imports: [CommonModule],
  exports: [GetColumnValuePipe],
})
export class CustomPipesModule {}
