import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//components
import { AdminRoutingModule } from './admin-routing.module';
import { ListDocentesComponent } from './components/list-docentes/list-docentes.component';
import { DocenteDetailComponent } from './components/docente-detail/docente-detail.component';
import {DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';

//modulos del proyecto
import {SharedModule } from '../shared/shared.module';

//primeNg modules
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import {AccordionModule} from 'primeng/accordion';

import {SplitButtonModule} from 'primeng/splitbutton';

//Ngx-spinner
import { NgxSpinnerModule } from 'ngx-spinner'
import { InterceptorService } from './services/interceptor.service';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { DashboardActualizacionesComponent } from './components/dashboard-actualizaciones/dashboard-actualizaciones.component';

//ckeditor
import {EditorModule} from 'primeng/editor';
import { BodyDashboardActualizacionesComponent } from './components/body-dashboard-actualizaciones/body-dashboard-actualizaciones.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { OfertaAcademicaComponent } from './components/oferta-academica/oferta-academica.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { DashboardDigestoComponent } from './components/dashboard-digesto/dashboard-digesto.component';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    ListDocentesComponent,
    DocenteDetailComponent,
    ListUsuariosComponent,
    DashboardActualizacionesComponent,
    BodyDashboardActualizacionesComponent,
    SidenavComponent,
    InscripcionesComponent,
    OfertaAcademicaComponent,
    ConvocatoriaComponent,
    DashboardDigestoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    SharedModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    CardModule,
    TooltipModule,
    NgxSpinnerModule,
    SplitButtonModule,
    EditorModule,
    AccordionModule
  ],

  providers: [
    MessageService,
    ConfirmationService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
   ]
})
export class AdminModule { }
