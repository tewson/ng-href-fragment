import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[ngHrefFragment]'
})
export class NgHrefFragmentDirective {

  constructor() {}

  @Input('ngHrefFragment') targetId: string;

  @HostListener('click') onClick() {
    document.getElementById(this.targetId).scrollIntoView();
  }
}