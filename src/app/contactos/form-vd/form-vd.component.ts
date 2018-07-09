import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto.model';
import { GRUPOS, SECTORES, AFICIONES } from '../../models/maestro.datos';
import { Grupo } from '../../models/grupo.model';
import { Sector } from '../../models/sector.model';
import { Aficion } from '../../models/aficiones.model';

@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css']
})
export class FormVdComponent implements OnInit {
  contacto: Contacto;
  aGrupos: Array<Grupo>;
  aSectores: Array<Sector>;
  aAficiones: Array<Aficion>;

  constructor() {  }

  ngOnInit() {
    this.contacto = new Contacto();
    this.aGrupos = GRUPOS;
    this.aSectores = SECTORES;
    this.aAficiones = AFICIONES;
  }
  changeAficiones(ev) {
    if (ev.target.checked) {
       this.contacto.aficiones.push(ev.target.id);
     } else {
       this.contacto.aficiones.splice(
         this.contacto.aficiones.indexOf(ev.target.id), 1
       );
     }
   }

   enviar() {
     console.log('Datos enviados');
   }
}

