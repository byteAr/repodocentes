import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';

//primeNg modules
import {CheckboxModule} from 'primeng/checkbox';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { RepositorioComponent } from './components/repositorio/repositorio.component';
import { RegisterComponent } from './components/register/register.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { SharedModule } from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardAdminComponent,
    RepositorioComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CheckboxModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    SharedModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class AdminModule { }
