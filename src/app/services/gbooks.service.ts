import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GbooksService {

  aLibros: Array<string>;
  urlBase: string;

  constructor(public http: HttpClient) {
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibros(clave: string) {
    const URL = this.urlBase + clave;
    return this.http.get(URL)
     .pipe(
       map(response => this.extractTitles(response))
     );
  }

  private extractTitles(response: any) {
    return response.items.map(book => book.volumeInfo.title);

  }
}
