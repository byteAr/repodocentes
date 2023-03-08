import { Component, OnInit } from '@angular/core';
import { Novedad } from '../../interfaces/interfaces.interface';
import { NovedadesService } from '../../../admin/services/novedades.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  novedades:Novedad[] = [];
  url= environment.baseUrl

  isTab1Active:boolean = false;
  isTab2Active:boolean = false;
  isTab3Active:boolean = false;
  isTab4Active:boolean = false;
  isTab5Active:boolean = false;
  display: boolean = false;

  constructor(
    private novedadesService: NovedadesService
  ) { }

  ngOnInit(): void {
    this.novedadesService.traerTodasLasNovedades().subscribe(data => {
      this.novedades = data.rows.reverse()
    })
    
    
    this.novedades = [
     
     /*  {
        id: 0,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura19.png',
        date: '26 de Mayo de 2022',
        description: 'Se encuentran abiertas las inscripciones para los Cursos de Posgrado',
        location: 'IUGNA: Escuela Superior',
        route: 'novedades/novedad1'
      }, */
      
      
    ]
  }
  ejecutarTab(key:number) {
    
    switch (key) {
      case 1:
        this.isTab1Active = !this.isTab1Active;
        this.isTab2Active = false;
        this.isTab3Active = false;
        this.isTab4Active = false;
        this.isTab5Active = false;
        break;
      case 2:
        this.isTab2Active = !this.isTab2Active;
        this.isTab1Active = false;
        this.isTab3Active = false;
        this.isTab4Active = false;
        this.isTab5Active = false;
        break;
      case 3:
          this.isTab3Active = !this.isTab3Active;
          this.isTab2Active = false;
          this.isTab1Active = false;
          this.isTab4Active = false;
          this.isTab5Active = false;
          break;
      case 4:
          this.isTab4Active = !this.isTab4Active;
          this.isTab2Active = false;
          this.isTab3Active = false;
          this.isTab1Active = false;
          this.isTab5Active = false;
          break;
      case 5:
          this.isTab5Active = !this.isTab5Active;
          this.isTab2Active = false;
          this.isTab3Active = false;
          this.isTab4Active = false;
          this.isTab1Active = false;
        break;
    
      default:
        break;
    }
   
  }
  showDialog() {
    this.display = true;
  }

}
