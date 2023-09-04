import { Component } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent {


  photoUrl! : string

  constructor(private photoServ : PhotosService){
    this.FetchImg()
  }


  FetchImg(){
    this.photoServ.getPhotos().subscribe((res)=>{
      this.photoUrl = res.urls.regular
    })
  }

}
