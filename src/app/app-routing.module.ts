import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarRolAdminGuard } from './guards/loginGuards/validar-rol-admin.guard';
import { ValidarTokenGuard } from './guards/loginGuards/validar-token.guard';
import { ValidarRolStandartGuard } from './guards/loginGuards/validar-rol-standart.guard';

const routes: Routes = [
  /* {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }, */
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [ValidarRolAdminGuard],
    canLoad: [ValidarTokenGuard]


  },
  {
    path: 'invitado',
    loadChildren: () => import('./standart/standart.module').then(m => m.StandartModule),
    canActivate: [ValidarRolStandartGuard],
    canLoad: [ValidarTokenGuard]


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
