import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarRolAdminGuard } from './guards/loginGuards/validar-rol-admin.guard';
import { ValidarTokenGuard } from './guards/loginGuards/validar-token.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [ValidarRolAdminGuard],
    canLoad: [ValidarTokenGuard]


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
