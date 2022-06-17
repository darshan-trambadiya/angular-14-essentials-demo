// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// directives
import { ContentModifierDirective } from './content-modifier.directive';

@NgModule({
  declarations: [ContentModifierDirective],
  imports: [CommonModule],
  exports: [ContentModifierDirective],
})
export class CustomDirectivesModule {}
