import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DocenteDetailComponent } from './components/docente-detail/docente-detail.component';
import { DashboardActualizacionesComponent } from './components/dashboard-actualizaciones/dashboard-actualizaciones.component';
import { NewNovedadComponent } from './components/new-novedad/new-novedad.component';
import { AutoridadesComponent } from './components/autoridades/autoridades.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { OfertaAcademicaComponent } from './components/oferta-academica/oferta-academica.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { DashboardDigestoComponent } from './components/dashboard-digesto/dashboard-digesto.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent,
  },
  {
    path: 'docente/:id',
    component: DocenteDetailComponent
  },
  {
    path: 'actualizacion',
    component: DashboardActualizacionesComponent,
    children: [
      {
        path: 'novedades',
        component: NewNovedadComponent
      },
      {
        path: 'autoridades',
        component: AutoridadesComponent
      },
      {
        path: 'inscripciones',
        component: InscripcionesComponent
      },
      {
        path: 'ofertaAcademica',
        component: OfertaAcademicaComponent
      },
      {
        path: 'convocatoria',
        component: ConvocatoriaComponent
      }
    ]
  },
  {
    path: 'digesto',
    component: DashboardDigestoComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
