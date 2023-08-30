import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data = [
    { name: 'Jams', age: 24, job: 'Designer' },
    { name: 'Jill', age: 25, job: 'Engineer' },
    { name: 'Elise', age: 26, job: 'Designer' },
  ]

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label :'Job' },
  ]
}
