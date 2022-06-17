// external
import { Component } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger,
  sequence,
} from '@angular/animations';

@Component({
  selector: 'perx-navigation-bar',
  templateUrl: './perx-navigation-bar.component.html',
  styleUrls: ['./perx-navigation-bar.component.scss'],
  animations: [
    trigger('listItemAnimation', [
      transition(':enter', [
        style({ height: 0, overflow: 'hidden' }),
        query('.mat-list-item', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
        ]),
        sequence([
          animate('300ms', style({ height: '*' })),
          query('.mat-list-item', [
            stagger(-50, [
              animate('600ms ease', style({ opacity: 1, transform: 'none' })),
            ]),
          ]),
        ]),
      ]),
    ]),
  ],
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
