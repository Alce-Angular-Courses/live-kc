import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-libros',
  template: `
    <div class="row">
      <kc-mock-books class="col-6 mb-4"></kc-mock-books>
      <kc-google-books class="col-6 mb-4"></kc-google-books>
      <kc-google-by-service class="col-6 mb-4"></kc-google-by-service>
      <kc-lista class="col-6 mb-4">"</kc-lista>
    </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
