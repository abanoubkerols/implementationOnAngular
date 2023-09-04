import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse{
  urls:{
    regular :string
  }
}



@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http : HttpClient) { }

  getPhotos(){
    return this.http.get<UnsplashResponse>(`https://api.unsplash.com/photos/random`,{
      headers:{
        "Authorization": "Client-ID DNCrW_lGPy7plf6lGkrZu9nM5BMqxfpdP_XDuu2ZrdQ",
     
      }
    })
  }

}

