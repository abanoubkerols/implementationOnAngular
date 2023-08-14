import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets/tree.jpeg',
      username: '@nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imgUrl: 'assets/mountain.jpeg',
      username: '@mountainLover',
      content: 'Here is a picture of a snowy mountain'
    },
    {
      title: 'mountain Biking',
      imgUrl: 'assets/biking.jpeg',
      username: '@biking',
      content: '  I did some biking today'
    }

  ]
}
