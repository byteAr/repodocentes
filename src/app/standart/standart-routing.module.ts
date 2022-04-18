import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStandartComponent } from './components/dashboard-standart/dashboard-standart.component';
import { DocenteDetailComponent } from './components/docente-detail/docente-detail.component';

const routes: Routes = [
  {path:'',component: DashboardStandartComponent},
  {path: 'docente/:id', component: DocenteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandartRoutingModule { }
