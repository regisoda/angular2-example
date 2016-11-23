import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[hostlistenerHostbindingDirective]'
})
export class HostlistenerHostbindingDirective {

  private backgroundColor: string;

  constructor() { }

  @HostListener('mouseenter') onMouseOver() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
      );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
      );*/
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() { // setter and getter example
    return this.backgroundColor;
  }
}
