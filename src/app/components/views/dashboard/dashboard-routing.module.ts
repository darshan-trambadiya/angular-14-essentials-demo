// external
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { DashboardComponent } from './dashboard.component';
import { TableResultComponent } from '../dashboard/table-result/table-result.component';
import { DirectiveResultComponent } from '../dashboard/directive-result/directive-result.component';

// routes
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'table-result', component: TableResultComponent },
      { path: 'directive-result', component: DirectiveResultComponent },
      { path: '', redirectTo: 'table-result', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
