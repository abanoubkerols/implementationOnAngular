import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private ViewCon: ViewContainerRef, private Temp: TemplateRef<any>) { }

  @Input('appTimes') set render(times: number) {
    this.ViewCon.clear();

    for (let i = 0; i < times; i++) {
      this.ViewCon.createEmbeddedView(this.Temp, {})
    }
  }
}
