import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderRepoComponent } from './components/header-repo/header-repo.component';
import { FooterRepoComponent } from './components/footer-repo/footer-repo.component';



//PrimeNg
import { AvatarModule } from "primeng/avatar";
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AccordionModule} from 'primeng/accordion';
import {SidebarModule} from 'primeng/sidebar';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';

import { SubmenuInvestigacionComponent } from './components/submenu-investigacion/submenu-investigacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderRepoComponent,
    FooterRepoComponent,
    SubmenuInvestigacionComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AvatarModule,
    MenubarModule,
    SplitButtonModule,
    AccordionModule,
    FontAwesomeModule,
    MenuModule,
    SidebarModule,
    DialogModule,
    DividerModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderRepoComponent,
    FooterRepoComponent,
    SubmenuInvestigacionComponent
  ]
})
export class SharedModule { }
