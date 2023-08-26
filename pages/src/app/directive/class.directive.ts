import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @Input() set appClass(color: string) {
    this.el.nativeElement.style.backgroundColor = color

  }



  constructor(private el: ElementRef) {

  }

}
