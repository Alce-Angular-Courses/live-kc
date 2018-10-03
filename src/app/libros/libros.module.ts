import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockBooksComponent } from './mock-books/mock-books.component';
import { FormsModule } from '@angular/forms';
import { MbooksService } from '../services/mbooks.service';
import { GoogleBooksComponent } from './google-books/google-books.component';
import { GoogleByServiceComponent } from './google-by-service/google-by-service.component';
import { GbooksService } from '../services/gbooks.service';
import { ListaComponent } from './lista/lista.component';
import { DetailsComponent } from './details/details.component';
import { CatalogoService } from '../services/catalogo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ],
  declarations: [
    LibrosComponent,
    MockBooksComponent,
    GoogleBooksComponent,
    GoogleByServiceComponent,
    ListaComponent,
    DetailsComponent
    ],
  providers: [
    MbooksService,
    GbooksService,
    CatalogoService
  ]
})
export class LibrosModule { }
