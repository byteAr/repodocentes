import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarRolAdminGuard } from '../guards/loginGuards/validar-rol-admin.guard';
import { ValidarTokenGuard } from '../guards/loginGuards/validar-token.guard';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RepositorioComponent } from './components/repositorio/repositorio.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'repositorio',
    component: RepositorioComponent
  },
  {
    path: 'dashboard',
    component: DashboardAdminComponent,
    
  },
  {
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
