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
  public list_videos=[];

  constructor(private video: VideoService) { }

  ngOnInit() {
    
  }

  seek(){
    this.video.search(this.keyword)
    .subscribe(resp =>{
      this.list_videos= resp.items;
      console.log(this.list_videos)
    });
  }

}
