import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {


  stats = [
    {value :22 , label : '# of Users'},
    {value :900 , label : 'Revenue'},
    {value :50 , label : 'Satisfaction Score '},
    
  ]


  Items = [
    {
      image: "/assets/images/couch.jpeg",
      title:'Couch',
      description: 'This is A Fantastic Couch to sit on'
    },
    {
      image: "/assets/images/dresser.jpeg",
      title:'Dresser',
      description: 'This is A Fantastic dresser to put stuff in'
    },
  ];

}
