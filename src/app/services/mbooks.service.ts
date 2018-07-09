import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbooksService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Introducción a Angular', 'Angular a fondo', 'Angular avanzado'
    ];
   }

   getLibros(clave: string) {
     return this.aLibros;
   }

   getLibros$(clave: string) {
    return new Observable(
      (observer) => {
        setTimeout( () => {
          observer.next(this.aLibros);
        }, 2000);
      }
    );
  }

}
