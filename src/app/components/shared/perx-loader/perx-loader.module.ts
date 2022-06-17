// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// components
import { PerxLoaderComponent } from './perx-loader.component';

@NgModule({
  declarations: [PerxLoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [PerxLoaderComponent],
})
export class PerxLoaderModule {}
