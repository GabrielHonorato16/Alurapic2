import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brigthness = '90%'

    constructor(
      private el: ElementRef,
      private render: Renderer2

      ) {}

    @HostListener('mouseover')
    darkenOn() {
      this.render.setStyle(this.el.nativeElement,'filter', `brightness(${this.brigthness})`);
    }
    @HostListener('mouseleave')
    darkenOff() {
      this.render.setStyle(this.el.nativeElement,'filter', 'brightness(100%)');
    }
}
