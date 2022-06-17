// external
import { Component } from '@angular/core';

@Component({
  selector: 'perx-navigation-bar',
  templateUrl: './perx-navigation-bar.component.html',
  styleUrls: ['./perx-navigation-bar.component.scss'],
})
export class PerxNavigationBarComponent {
  public navLinks: Array<{ label: string; link: string[] }> = [
    {
      label: 'Table Result',
      link: ['/dashboard/table-result'],
    },
    {
      label: 'Directive Result',
      link: ['/dashboard/directive-result'],
    },
  ];
}
