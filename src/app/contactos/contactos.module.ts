import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { FormVdComponent } from './form-vd/form-vd.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactosRoutingModule
  ],
  declarations: [ContactosComponent, FormVdComponent]
})
export class ContactosModule { }
