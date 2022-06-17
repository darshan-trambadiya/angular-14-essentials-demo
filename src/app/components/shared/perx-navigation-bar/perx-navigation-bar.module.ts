// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

// components
import { PerxNavigationBarComponent } from './perx-navigation-bar.component';

@NgModule({
  declarations: [PerxNavigationBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [MatSidenavModule, PerxNavigationBarComponent],
})
export class PerxNavigationBarModule {}
