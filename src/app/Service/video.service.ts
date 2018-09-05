import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  public url : string = "https://www.googleapis.com/youtube/v3/";


  constructor(private http: HttpClient) {  }

  search( keyword : string ):Observable<any>{
    let path = `${this.url}search?part=snippet&maxResults=6&q=${keyword}
    &key=AIzaSyAHAzCQjK8HBHmc-H7JUZEjQayBJ0yOz_I&type=video`;
    return this.http.get<any>(path);
  }

  recommended():Observable<any>{
    let path = `${this.url}videos?part=snippet&chart=mostPopular&maxResults=6&regionCode=CO&key=AIzaSyAHAzCQjK8HBHmc-H7JUZEjQayBJ0yOz_I`;
    return this.http.get<any>(path);
  }
  
}
