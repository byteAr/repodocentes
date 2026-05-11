import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerifyComponent } from './components/verify/verify.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { InviteTokenGuard } from './guards/invite-token.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro/:token',
    component: RegistroComponent,
    canActivate: [InviteTokenGuard]
  },
  {
    path: 'verify/:id',
    component: VerifyComponent
  },
  {
    path: 'recovery/:id',
    component: RecoveryPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
