// external
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'perx-directive-result',
  templateUrl: './directive-result.component.html',
  styleUrls: ['./directive-result.component.scss'],
})
export class DirectiveResultComponent {
  public textareaValue: string = '';
  public isOnFly: boolean = true;

  public textareaSubject$ = new Subject();
  public textarea$!: Observable<any>;

  constructor() {
    this.textarea$ = this.textareaSubject$;
  }

  /**
   * @description Emit input text on every input change
   */
  onTextareaInputChanged() {
    if (this.isOnFly) {
      this.textareaSubject$.next(this.textareaValue);
    }
  }

  /**
   * @description Emit input text on submit
   */
  onSubmit() {
    if (!this.isOnFly) {
      this.textareaSubject$.next(this.textareaValue);
    }
  }
}
