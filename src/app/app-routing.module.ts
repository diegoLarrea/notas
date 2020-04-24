import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotasComponent } from './notas/notas.component';


const routes: Routes = [
  {
    path: '',
    component: NotasComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
