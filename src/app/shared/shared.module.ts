import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderRepoComponent } from './components/header-repo/header-repo.component';
import { FooterRepoComponent } from './components/footer-repo/footer-repo.component';

//PrimeNg
import { AvatarModule } from "primeng/avatar";
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderRepoComponent,
    FooterRepoComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AvatarModule,
    MenubarModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderRepoComponent,
    FooterRepoComponent
  ]
})
export class SharedModule { }
