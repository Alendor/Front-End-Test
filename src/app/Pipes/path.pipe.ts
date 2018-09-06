import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'

@Pipe({
  name: 'path'
})

export class PathPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){

  }

/**
 * Este metodo se utiliza para enviar de manera segura la url y evitar inconvenientes de seguridad por el 
 * XSS
 */

  transform(value: any, url?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+value+"?autoplay=1");
  }

}
