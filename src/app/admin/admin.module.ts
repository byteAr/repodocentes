import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { AdminRoutingModule } from './admin-routing.module';

//primeNg modules
import {CheckboxModule} from 'primeng/checkbox';
import {DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SharedModule } from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {MessageService } from 'primeng/api';
import {ConfirmationService } from 'primeng/api';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CheckboxModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    TableModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class AdminModule { }
