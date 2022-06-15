// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { PerxNavigationBarModule } from '../../shared/perx-navigation-bar/perx-navigation-bar.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

// components
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, PerxNavigationBarModule, DashboardRoutingModule],
})
export class DashboardModule {}
