import { OnInit, Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class InputPropertyBindingDirective implements OnInit {

    @Input() defaultColor: string = 'white';
    @Input('highlight') highlightColor: string = 'yellow';

    @HostBinding('style.backgroundColor') backgroundColor: string;

    @HostListener('mouseenter') onMouseOver() {
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = this.defaultColor;
    }

    constructor() { }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

}
