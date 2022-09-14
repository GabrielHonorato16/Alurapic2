import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverDirective } from './dark-on-hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DarkenOnHoverDirective
   ],
   exports:[DarkenOnHoverDirective]
})
export class DarkOnHoverModule { }
