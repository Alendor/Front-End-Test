import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  public url : string = "https://www.googleapis.com/youtube/v3/search";


  constructor(private http: HttpClient) {  }

  search( keyword : string ):Observable<any>{
    let path = `${this.url}?part=snippet&maxResults=6&q=${keyword}&key=&type=video`;
    return this.http.get<any>(path);
  }
  
}
