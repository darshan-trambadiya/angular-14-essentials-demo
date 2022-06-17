// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// material
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

// modules
import { PerxButtonModule } from '../../shared/perx-button/perx-button.module';
import { PerxNavigationBarModule } from '../../shared/perx-navigation-bar/perx-navigation-bar.module';
import { PerxTableModule } from '../../shared/perx-table/perx-table.module';
import { CustomDirectivesModule } from '../../../directives/custom-directives.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

// components
import { DashboardComponent } from './dashboard.component';
import { TableResultComponent } from './table-result/table-result.component';
import { DirectiveResultComponent } from './directive-result/directive-result.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TableResultComponent,
    DirectiveResultComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    TextFieldModule,
    MatRadioModule,
    PerxButtonModule,
    PerxNavigationBarModule,
    PerxTableModule,
    CustomDirectivesModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
