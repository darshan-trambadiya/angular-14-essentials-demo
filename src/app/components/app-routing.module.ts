// external
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LandingPageComponent } from './views/landing-page/landing-page.component';

// routes
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
