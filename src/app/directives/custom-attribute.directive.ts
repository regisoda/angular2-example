import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  // selector: 'p[appCustomAttribute]'  // ONLY TAG <p>
  selector: '[appCustomAttribute]'
})
export class CustomAttributeDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {

    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow'; ---> NOT RECOMMENDED

    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}

