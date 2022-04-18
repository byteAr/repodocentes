import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DocenteDetailComponent } from './components/docente-detail/docente-detail.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent,    
  },  
  {
    path: 'docente/:id',
    component: DocenteDetailComponent
  },
  {
    path: '**', 
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
