import { Directive, ElementRef, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";
import { filter, map } from "rxjs";

@Directive({
  selector: "[appAnswerHighlight]",
})
export class AnswerHighlightDirective implements OnInit {
  constructor(private el: ElementRef, private controlName: NgControl) {
    this.el = this.el;
  }

  ngOnInit() {
    this.controlName.control?.parent?.valueChanges
      .pipe(map(({ a, b, ans }) =>Math.abs(( a + b - ans) / (a+b) ))

      ).subscribe((value) => {
        if(value < .2){
          this.el.nativeElement.classList.add("close");
        }
      else{
        this.el.nativeElement.classList.remove("close");
      }
         
       
      });
  }
}
