import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'

@Pipe({
  name: 'path'
})

export class PathPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){

  }

  transform(value: any, url?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+value);
  }

}
