import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curPage = 0;
  
  images = [
    {
      title: 'At The Beach',
      url: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
      title: 'At The Forest',
      url: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At The city',
      url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At The snow',
      url: 'https://images.unsplash.com/photo-1529420705456-5c7e04dd043d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At The branch',
      url: 'https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'fashion',
      url: 'https://images.unsplash.com/photo-1571497569639-7bd0fcd36c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Learning',
      url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    }
    , {
      title: 'Mechanic',
      url: 'https://images.unsplash.com/photo-1664033247283-93c8582c5090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At The Beach',
      url: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
      title: 'At The Forest',
      url: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At The city',
      url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At The snow',
      url: 'https://images.unsplash.com/photo-1529420705456-5c7e04dd043d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At The branch',
      url: 'https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'fashion',
      url: 'https://images.unsplash.com/photo-1571497569639-7bd0fcd36c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Learning',
      url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    }
    , {
      title: 'Mechanic',
      url: 'https://images.unsplash.com/photo-1664033247283-93c8582c5090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    }

  ]

  checkWindowIndex(index: number) {
    return Math.abs(this.curPage - index) < 3 ;
  }
}
