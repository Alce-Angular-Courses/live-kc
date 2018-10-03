import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: LibrosComponent },
  { path: 'book/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
