import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../Service/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [VideoService]
})
export class VideoComponent implements OnInit {

  /**
  * Se definen las variables basicas para la parte logica del componente
  */
  public keyword: string;
  public list_search: any;
  public link: any;
  public video_title: any;
  public description: any;
  public list_recommended: any;


  constructor(private video: VideoService) { }

  /**
  * En el ngOnInit() se inicializa la variable list_recommended que permite mostrar 
  * las sugerencias iniciales de videos en la pagina
  */

  ngOnInit() {
    this.video.recommended().subscribe(resp => {
      this.list_recommended = resp.items;
      console.log(this.list_recommended);
    });
  }

  /**
   * El metodo seek() permite realizar la busqueda de video por medio del texto o palabra 
   * clave ingresada por el usuario
   * Este a su vez invoca el metodo search() proveniente del /video.service.ts
   */

  seek() {
    if (this.keyword !== undefined) {
      this.video.search(this.keyword).subscribe(resp => {
        this.list_search = resp.items;
        console.log(this.list_search);
      });
    }

  }

  /**
   * Este metodo se usa para asignar desde el componente los valores a las variables necesarias
   * para reproducir un video
   */

  play(link: any, info: any) {
    this.link = link;
    this.video_title = info.title;
    this.description = info.description;
    console.log(this.link);
  }

}


