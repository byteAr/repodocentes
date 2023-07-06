import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component'

//PrimeNg Modules
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DividerModule} from 'primeng/divider';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {GalleriaModule} from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

//splide
import { NgxSplideModule } from 'ngx-splide';

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

import { NovedadDetailComponent } from './components/novedad-detail/novedad-detail.component';
import { NovedadRapidaComponent } from './components/novedad-rapida/novedad-rapida.component';
import { FronterasComponent } from './components/fronteras/fronteras.component';
import { BibliotecaGeneralComponent } from './components/biblioteca-general/biblioteca-general.component';
import { ConvocatoriaDocentesComponent } from './components/convocatoria-docentes/convocatoria-docentes.component';
import { NovedadRapidaSeguridadDistanciaComponent } from './components/novedad-rapida-seguridad-distancia/novedad-rapida-seguridad-distancia.component';
import { NovedadRapidaExtensionComponent } from './components/novedad-rapida-extension/novedad-rapida-extension.component';


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
    NovedadDetailComponent, NovedadRapidaComponent, FronterasComponent, BibliotecaGeneralComponent, ConvocatoriaDocentesComponent, NovedadRapidaSeguridadDistanciaComponent, NovedadRapidaExtensionComponent
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
    FormsModule,
    DialogModule,
    GalleriaModule,
    NgxSplideModule,
    ButtonModule
  ]
})
export class UserModule { }
