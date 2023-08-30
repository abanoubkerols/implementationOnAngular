import { Component, ElementRef, OnDestroy, OnInit ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit , OnDestroy {

  @Output()close = new EventEmitter()

  constructor(private ele : ElementRef){}

  ngOnInit(): void {
    document.body.appendChild(this.ele.nativeElement)
  }

  ngOnDestroy(): void {

  this.ele.nativeElement.remove()
  }

  onClose(){
    this.close.emit()

  }
}
