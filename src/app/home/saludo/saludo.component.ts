import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  usuario: string;
  idioma: string;
  constructor() { }

  ngOnInit() {
    this.usuario = 'Pepe';
    this.idioma = 'en';
  }

  btnBorrar (ev) {
    console.log(ev);
    this.usuario = '';
  }

}
