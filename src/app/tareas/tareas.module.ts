import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';

@NgModule({
  imports: [
    CommonModule,
    TareasRoutingModule
  ],
  declarations: [TareasComponent]
})
export class TareasModule { }
