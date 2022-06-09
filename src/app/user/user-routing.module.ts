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
    path: 'novedades/novedad1',
    component: Novedad1Component
  },
  {
    path: 'novedades/novedad2',
    component: Novedad2Component
  },
  {
    path: 'novedades/novedad3',
    component: Novedad3Component
  },
  {
    path: 'novedades/novedad4',
    component: Novedad4Component
  },
  {
    path: 'novedades/novedad5',
    component: Novedad5Component
  },
  {
    path: 'novedades/novedad6',
    component: Novedad6Component
  },
  {
    path: 'novedades/novedad7',
    component: Novedad7Component
  },
  {
    path: 'novedades/novedad8',
    component: Novedad8Component
  },
  {
    path: 'novedades/novedad9',
    component: Novedad9Component
  },
  {
    path: 'novedades/novedad10',
    component: Novedad10Component
  },
  {
    path: 'novedades/novedad11',
    component: Novedad11Component
  },
  {
    path: 'novedades/novedad12',
    component: Novedad12Component
  },
  {
    path: 'novedades/novedad13',
    component: Novedad13Component
  },
  {
    path: 'novedades/novedad14',
    component: Novedad14Component
  },
  {
    path: 'novedades/novedad15',
    component: Novedad15Component
  },
  {
    path: 'novedades/novedad16',
    component: Novedad16Component
  },
  {
    path: 'novedades/novedad17',
    component: Novedad17Component
  },
  {
    path: 'novedades/novedad18',
    component: Novedad18Component
  },
  {
    path: 'novedades/novedad19',
    component: Novedad19Component
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
