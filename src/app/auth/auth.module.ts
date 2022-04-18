import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerifyComponent } from './components/verify/verify.component';

import { SharedModule } from '../shared/shared.module';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

//PrimeNg
import {DialogModule} from 'primeng/dialog';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    VerifyComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ProgressSpinnerModule,
    DialogModule,
    FormsModule

    
    
  ],
  providers: [MessageService, ConfirmationService]
})
export class AuthModule { }
