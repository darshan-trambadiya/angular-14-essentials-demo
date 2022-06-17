// external
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { get, isNil } from 'lodash';

@Directive({
  selector: '[perxContentModifier]',
})
export class ContentModifierDirective implements OnChanges {
  @Input() content!: any;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const contentValue = get(changes, ['content', 'currentValue']);

    if (!isNil(contentValue)) {
      this.el.nativeElement.innerText = contentValue;
    }
  }
}
