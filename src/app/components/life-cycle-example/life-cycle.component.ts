import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: `
    <p #varX >{{initialValue}}</p>
    <p>{{ varX.textContent }}</p>
  `
})
export class LifeCycleComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  i = 0;

  @Input() initialValue = 10;

  @ViewChild('varX') varX: HTMLElement;

  constructor() {
    this.logHook('constructor');
    this.logVar();
  }

  ngOnChanges() {
    this.logHook('ngOnChanges');
    this.logVar();
  }

  ngOnInit() {
    this.logHook('ngOnInit');
    this.logVar();
  }

  ngDoCheck() {
    this.logHook('ngDoCheck');
  }

  ngAfterContentInit() {
    this.logHook('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logHook('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logHook('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logHook('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logHook('ngOnDestroy');
  }

  private logHook(hook: string) {
    this.i++;
    console.log('Hook ' + this.i + ': [' + hook + ']');
  }

  private logVar() {
    if (this.varX != undefined) {
      console.log('Hook ' + this.i + ': [ViewChild] ');
      console.log(this.varX);
    }
    else {
      console.log('Hook ' + this.i + ': [ViewChild] = [undefined]');
    }
  }
}