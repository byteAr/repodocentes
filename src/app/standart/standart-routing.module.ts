import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStandartComponent } from './components/dashboard-standart/dashboard-standart.component';

const routes: Routes = [
  {path:'',component: DashboardStandartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandartRoutingModule { }
