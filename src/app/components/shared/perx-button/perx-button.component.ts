import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'perx-button',
  templateUrl: './perx-button.component.html',
})
export class PerxButtonComponent {
  @Input() color: string = 'primary';
  @Input() text!: string;

  @Output() onClicked = new EventEmitter();

  onButtonClicked() {
    this.onClicked.emit(true);
  }
}
