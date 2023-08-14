import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typingGame';
  randomText = faker.lorem.sentence();
  text = ''
  onInput(e: Event) {
    this.text = (e.target as HTMLInputElement).value
  }

  compare(latter: string, entered: string) {
    if (!entered) {
      return 'pending'
    }

    if (entered === latter) {
      return 'correct'
    } else {
      return 'incorrect'
    }
  }
}
