import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from '../../Component/video/video.component'

const appRoutes: Routes =[
  {path: '', component: VideoComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
