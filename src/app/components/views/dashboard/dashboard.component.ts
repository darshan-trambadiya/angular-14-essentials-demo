// external
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { delay } from 'lodash';

// material
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'perx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  ngAfterViewInit() {
    // Should change the drawer state at least once, to work Angular Animations properly
    delay(() => {
      this.drawer.open();
    }, 0);
  }
}
