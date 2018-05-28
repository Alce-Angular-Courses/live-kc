import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';

@NgModule({
  imports: [
    CommonModule,
    ContactosRoutingModule
  ],
  declarations: [ContactosComponent]
})
export class ContactosModule { }
