// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

// components
import { PerxNavigationBarComponent } from './perx-navigation-bar.component';

@NgModule({
  declarations: [PerxNavigationBarComponent],
  imports: [CommonModule, MatSidenavModule],
  exports: [PerxNavigationBarComponent],
})
export class PerxNavigationBarModule {}
