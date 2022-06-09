import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscusuperPregradoComponent } from '../escusuper-pregrado/escusuper-pregrado.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'pregrado', component: EscusuperPregradoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscusuperOfertaRoutingModule { }
