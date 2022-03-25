import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { StandartRoutingModule } from './standart-routing.module';
import { DashboardStandartComponent } from './components/dashboard-standart/dashboard-standart.component';
import {SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardStandartComponent
  ],
  imports: [
    CommonModule,
    StandartRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StandartModule { }
