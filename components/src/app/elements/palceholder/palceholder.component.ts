import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-palceholder',
  templateUrl: './palceholder.component.html',
  styleUrls: ['./palceholder.component.css']
})
export class PalceholderComponent {

  @Input() header = true
  @Input() lines = 3

}
