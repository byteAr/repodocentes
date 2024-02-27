import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { ExtensionComponent } from './components/extension/extension.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { IugnaCinComponent } from './components/iugna-cin/iugna-cin.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
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
import { CursosExtensionComponent } from './components/cursos-extension/cursos-extension.component';
import { CiclosInvestigacionComponent } from './components/ciclos-investigacion/ciclos-investigacion.component';
import { BibliotecaEscusuperComponent } from './components/biblioteca-escusuper/biblioteca-escusuper.component';
import { EscugenComponent } from './components/escugen/escugen.component';
import { EscugenGradoComponent } from './components/escugen-grado/escugen-grado.component';
import { EscugenOfertaComponent } from './components/escugen-oferta/escugen-oferta.component';
import { EscugenAreaTecnicoProfesionalComponent } from './components/escugen-area-tecnico-profesional/escugen-area-tecnico-profesional.component';
import { EscugenRegimenCursadaComponent } from './components/escugen-regimen-cursada/escugen-regimen-cursada.component';
import { BibliotecaEscugenComponent } from './components/biblioteca-escugen/biblioteca-escugen.component';
import { EscusubComponent } from './components/escusub/escusub.component';
import { EscusubOfertaComponent } from './components/escusub-oferta/escusub-oferta.component';
import { EscusubTecnicaturasComponent } from './components/escusub-tecnicaturas/escusub-tecnicaturas.component';
import { BibliotecaEscusubComponent } from './components/biblioteca-escusub/biblioteca-escusub.component';
import { InscaesComponent } from './components/inscaes/inscaes.component';
import { InsbarrealComponent } from './components/insbarreal/insbarreal.component';

import { EscusuperProfesoradoComponent } from './components/escusuper-profesorado/escusuper-profesorado.component';
import { NovedadDetailComponent } from './components/novedad-detail/novedad-detail.component';
import { NovedadRapidaComponent } from './components/novedad-rapida/novedad-rapida.component';
import { FronterasComponent } from './components/fronteras/fronteras.component';
import { BibliotecaGeneralComponent } from './components/biblioteca-general/biblioteca-general.component';
import { ConvocatoriaDocentesComponent } from './components/convocatoria-docentes/convocatoria-docentes.component';
import { NovedadRapidaExtensionComponent } from './components/novedad-rapida-extension/novedad-rapida-extension.component';
import { NovedadRapidaSeguridadDistanciaComponent } from './components/novedad-rapida-seguridad-distancia/novedad-rapida-seguridad-distancia.component';
import { NovedadRapidaPostgradoComponent } from './components/novedad-rapida-postgrado/novedad-rapida-postgrado.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
  {
    path:'institucional',
    component: InstitucionalComponent

  },
  {
    path:'investigacion',
    component: InvestigacionComponent

  },
  {
    path:'biblioteca',
    component: BibliotecaGeneralComponent

  },
  {
    path:'investigacion/biblioteca',
    component: BibliotecaComponent

  },
  {
    path:'investigacion/cin',
    component: IugnaCinComponent

  },
  {
    path:'extension',
    component: ExtensionComponent

  },
  {
    path:'convocatoria',
    component: ConvocatoriaComponent

  },
  {
    path:'novedades',
    component: NovedadesComponent

  },
  {
    path:'novedad/extension',
    component: NovedadRapidaExtensionComponent

  },
  {
    path:'novedad/escusuper/inscripciones',
    component: NovedadRapidaSeguridadDistanciaComponent

  },
  {
    path:'novedad/escusuper/posgrado',
    component: NovedadRapidaPostgradoComponent

  },
  {
    path:'uuaa',
    component: UuddComponent

  },
  {
    path: 'uuaa/escusuper',
    component: EscusuperComponent
  },
  {
    path: 'uuaa/escusuper/oferta',
    component: EscusuperOfertaComponent,
    children: [
      {
        path: 'pregrado',
        component: EscusuperPregradoComponent
      },
      {
        path: 'ciclos',
        component: EscusuperCiclosComponent
      },
      {
        path: 'nivelacion',
        component: EscusuperNivelacionComponent
      },
      {
        path: 'diplomaturas',
        component: EscusuperDiplomaturasComponent
      }
    ]
  },
  {
    path: 'caligrafo',
    component: EscusuperCaligrafoPublicoComponent
  },
  {
    path: 'profesorado',
    component: EscusuperProfesoradoComponent
  },
  {
    path: 'ciclos/seguridad',
    component: CiclosSeguridPublicaComponent
  },
  {
    path: 'ciclos/administracion',
    component: CiclosAdminPublicaComponent
  },
  {
    path: 'ciclos/criminalistica',
    component: CiclosCriminalisticaComponent
  },
  {
    path: 'ciclos/investigacion',
    component: CiclosInvestigacionComponent
  },{
    path: 'uuaa/escusuper/extension',
    component: CursosExtensionComponent
  }
  ,{
    path: 'uuaa/escusuper/frontera',
    component: FronterasComponent
  }
  ,{
    path: 'uuaa/escusuper/biblioteca',
    component: BibliotecaEscusuperComponent
  },
  {
    path: 'uuaa/escugen',
    component: EscugenComponent
  },
  {
    path: 'uuaa/escugen/oferta',
    component: EscugenOfertaComponent,
    children: [
      {
        path: 'grado',
        component: EscugenGradoComponent
      },
      {
        path: 'area',
        component: EscugenAreaTecnicoProfesionalComponent
      },
      {
        path: 'regimen',
        component: EscugenRegimenCursadaComponent
      },

    ]

  },
  {
    path:'uuaa/inscaes',
    component: InscaesComponent
  },
  {
    path:'uuaa/insbarreal',
    component: InsbarrealComponent
  },
  {
    path: 'uuaa/escugen/biblioteca',
    component: BibliotecaEscugenComponent
  },
  {
    path: 'uuaa/escusub',
    component: EscusubComponent
  },
  {
    path: 'uuaa/escusub/oferta',
    component: EscusubOfertaComponent,
    children: [
      {
        path: 'tecnicaturas',
        component: EscusubTecnicaturasComponent
      }
    ]
  },
  {
    path: 'uuaa/escusub/biblioteca',
    component: BibliotecaEscusubComponent
  },
  {
    path: 'novedad/:id',
    component: NovedadDetailComponent
  },
  {
    path: 'inscripciones',
    component: NovedadRapidaComponent
  },
  {
    path: 'convocatoria-docentes',
    component: ConvocatoriaDocentesComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
