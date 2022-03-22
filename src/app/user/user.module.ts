import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component'

//PrimeNg Modules
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AccordionModule,
    CardModule,
    SharedModule
  ]
})
export class UserModule { }
