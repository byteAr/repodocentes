import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component'

//PrimeNg Modules
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DividerModule} from 'primeng/divider';
import {RadioButtonModule} from 'primeng/radiobutton';

import { SharedModule } from '../shared/shared.module';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { ExtensionComponent } from './components/extension/extension.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { IugnaCinComponent } from './components/iugna-cin/iugna-cin.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { UuddComponent } from './components/uudd/uudd.component';
import { EscusuperComponent } from './components/escusuper/escusuper.component';
import { EscusuperOfertaComponent } from './components/escusuper-oferta/escusuper-oferta.component';
import { EscusuperPregradoComponent } from './components/escusuper-pregrado/escusuper-pregrado.component';
import { EscusuperCiclosComponent } from './components/escusuper-ciclos/escusuper-ciclos.component';
import { EscusuperNivelacionComponent } from './components/escusuper-nivelacion/escusuper-nivelacion.component';
import { EscusuperDiplomaturasComponent } from './components/escusuper-diplomaturas/escusuper-diplomaturas.component';
import { EscusuperCaligrafoPublicoComponent } from './components/escusuper-caligrafo-publico/escusuper-caligrafo-publico.component';
import { CiclosSeguridPublicaComponent } from './components/ciclos-segurid-publica/ciclos-segurid-publica.component';
import { CiclosAdminPublicaComponent } from './components/ciclos-admin-publica/ciclos-admin-publica.component';
import { CiclosCriminalisticaComponent } from './components/ciclos-criminalistica/ciclos-criminalistica.component';
import { CiclosInvestigacionComponent } from './components/ciclos-investigacion/ciclos-investigacion.component';
import { EscusuperProfesoradoComponent } from './components/escusuper-profesorado/escusuper-profesorado.component';
import { CursosExtensionComponent } from './components/cursos-extension/cursos-extension.component';
import { BibliotecaEscusuperComponent } from './components/biblioteca-escusuper/biblioteca-escusuper.component';
import { EscugenComponent } from './components/escugen/escugen.component';
import { EscugenOfertaComponent } from './components/escugen-oferta/escugen-oferta.component';
import { EscugenGradoComponent } from './components/escugen-grado/escugen-grado.component';
import { EscugenAreaTecnicoProfesionalComponent } from './components/escugen-area-tecnico-profesional/escugen-area-tecnico-profesional.component';
import { EscugenRegimenCursadaComponent } from './components/escugen-regimen-cursada/escugen-regimen-cursada.component';
import { BibliotecaEscugenComponent } from './components/biblioteca-escugen/biblioteca-escugen.component';
import { EscusubComponent } from './components/escusub/escusub.component';
import { EscusubOfertaComponent } from './components/escusub-oferta/escusub-oferta.component';
import { EscusubTecnicaturasComponent } from './components/escusub-tecnicaturas/escusub-tecnicaturas.component';
import { BibliotecaEscusubComponent } from './components/biblioteca-escusub/biblioteca-escusub.component';
import { InscaesComponent } from './components/inscaes/inscaes.component';
import { InsbarrealComponent } from './components/insbarreal/insbarreal.component';
import { MenuofertaComponent } from './components/menuoferta/menuoferta.component';
import { Novedad1Component } from './novedades/novedad1/novedad1.component';
import { Novedad2Component } from './novedades/novedad2/novedad2.component';
import { Novedad3Component } from './novedades/novedad3/novedad3.component';
import { Novedad4Component } from './novedades/novedad4/novedad4.component';
import { Novedad5Component } from './novedades/novedad5/novedad5.component';
import { Novedad6Component } from './novedades/novedad6/novedad6.component';
import { Novedad7Component } from './novedades/novedad7/novedad7.component';
import { Novedad8Component } from './novedades/novedad8/novedad8.component';
import { Novedad9Component } from './novedades/novedad9/novedad9.component';
import { Novedad10Component } from './novedades/novedad10/novedad10.component';
import { Novedad11Component } from './novedades/novedad11/novedad11.component';
import { Novedad12Component } from './novedades/novedad12/novedad12.component';
import { Novedad13Component } from './novedades/novedad13/novedad13.component';
import { Novedad14Component } from './novedades/novedad14/novedad14.component';
import { Novedad15Component } from './novedades/novedad15/novedad15.component';
import { Novedad16Component } from './novedades/novedad16/novedad16.component';
import { Novedad17Component } from './novedades/novedad17/novedad17.component';
import { Novedad18Component } from './novedades/novedad18/novedad18.component';
import { Novedad19Component } from './novedades/novedad19/novedad19.component';


@NgModule({
  declarations: [
    HomeComponent,
    InstitucionalComponent,
    InvestigacionComponent,
    ExtensionComponent,
    ConvocatoriaComponent,
    BibliotecaComponent,
    IugnaCinComponent,
    NovedadesComponent,
    UuddComponent,
    EscusuperComponent,
    EscusuperOfertaComponent,
    EscusuperPregradoComponent,
    EscusuperCiclosComponent,
    EscusuperNivelacionComponent,
    EscusuperDiplomaturasComponent,
    EscusuperCaligrafoPublicoComponent,
    CiclosSeguridPublicaComponent,
    CiclosAdminPublicaComponent,
    CiclosCriminalisticaComponent,
    CiclosInvestigacionComponent,
    EscusuperProfesoradoComponent,
    CursosExtensionComponent,
    BibliotecaEscusuperComponent,
    EscugenComponent,
    EscugenOfertaComponent,
    EscugenGradoComponent,
    EscugenAreaTecnicoProfesionalComponent,
    EscugenRegimenCursadaComponent,
    BibliotecaEscugenComponent,
    EscusubComponent,
    EscusubOfertaComponent,
    EscusubTecnicaturasComponent,
    BibliotecaEscusubComponent,
    InscaesComponent,
    InsbarrealComponent,
    MenuofertaComponent,
    Novedad1Component,
    Novedad2Component,
    Novedad3Component,
    Novedad4Component,
    Novedad5Component,
    Novedad6Component,
    Novedad7Component,
    Novedad8Component,
    Novedad9Component,
    Novedad10Component,
    Novedad11Component,
    Novedad12Component,
    Novedad13Component,
    Novedad14Component,
    Novedad15Component,
    Novedad16Component,
    Novedad17Component,
    Novedad18Component,
    Novedad19Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    AccordionModule,
    CardModule,
    BreadcrumbModule,
    DataViewModule,
    NgxPaginationModule,
    DividerModule,
    RadioButtonModule,
    FormsModule
  ]
})
export class UserModule { }
