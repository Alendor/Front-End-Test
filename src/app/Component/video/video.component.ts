import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../Service/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [VideoService]
})
export class VideoComponent implements OnInit {

  public keyword: string;
  public list_search:any;
  public link: string;

  public list_recommended:any;

  
 
  constructor(private video: VideoService) { }



  ngOnInit() {
    this.video.recommended()
    .subscribe(resp =>{ 
      this.list_recommended = resp.items;
    });;
  
  }

  seek(){
    if(this.keyword !== undefined ){
      this.video.search(this.keyword)
      .subscribe(resp =>{
      this.list_search = resp.items;
      console.log(this.list_search);
      });
    }
    
  }

  play( link1: string){
    this.link = link1;
    console.log(this.link);
  }

}


