import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovedadesService } from '../../services/novedades.service';
import { environment } from '../../../../environments/environment.prod';
import { Novedad } from '../../interfaces/interfaces.interface';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-novedad-detail',
  templateUrl: './novedad-detail.component.html',
  styleUrls: ['./novedad-detail.component.css']
})
export class NovedadDetailComponent implements OnInit {

  id:any = '';
  url = environment.baseUrl;
  novedad: any = {};
  descripcion?: SafeHtml

  constructor(
    private activateRoute: ActivatedRoute,
    private novedadService: NovedadesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    /* this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.novedadService.traerNovedad(this.id)
      .subscribe(data => {
        this.novedad = data.rows[0];
        this.descripcion = this.sanitizer.bypassSecurityTrustHtml(this.novedad.descripcion)
      }) */

  }

}
