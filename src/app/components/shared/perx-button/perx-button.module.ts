// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

// components
import { PerxButtonComponent } from './perx-button.component';

@NgModule({
  declarations: [PerxButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [PerxButtonComponent],
})
export class PerxButtonModule {}
