import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from '../Component/app.component';
import { VideoComponent } from '../Component/video/video.component';
import { AppRoutingModule,  } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PathPipe } from '../Pipes/path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PathPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
