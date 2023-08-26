import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string
  date!: string
  Amount!: string
  height!: number
  miles!: number
  car = {
    make: 'Kia',
    model: 'Seltos',
    year: 2020
  }

  onNameChange(e: Event) {
    this.name = (e.target as HTMLInputElement).value
  }

  onNameDate(e: Event) {
    this.date = (e.target as HTMLInputElement).value
  }


  onNameAmount(e: Event) {
    this.Amount = (e.target as HTMLInputElement).value
  }
  onNameHeight(e: Event) {
    this.height = parseFloat((e.target as HTMLInputElement).value)
  }
  onNameMiles(e: Event) {
    this.miles = parseFloat((e.target as HTMLInputElement).value)
  }


}
