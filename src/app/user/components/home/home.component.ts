import { Component, OnInit } from '@angular/core';
import { Novedad } from '../../interfaces/interfaces.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  novedades:Novedad[] = [];

  isTab1Active:boolean = false;
  isTab2Active:boolean = false;
  isTab3Active:boolean = false;
  isTab4Active:boolean = false;
  isTab5Active:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.novedades = [
      {
        id: 0,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura19.png',
        date: '26 de Mayo de 2022',
        description: 'Se encuentran abiertas las inscripciones para los Cursos de Posgrado',
        location: 'IUGNA: Escuela Superior',
        route: 'novedades/novedad1'
      },
      {
        id: 1,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura18.jpeg',
        date: '26 de Abril de 2022',
        description: 'Primera Reunión Ordinaria del Consejo Académico 2022 del IUGNA',
        location: 'CABA',
        route: 'novedades/novedad2'
      },
      {
        id: 2,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura17.png',
        date: '28 de Marzo de 2022',
        description: 'Inscripciones abiertas para los Cursos de Extensión Universitaria',
        location: 'IUGNA: Escuela Superior',
        route: 'novedades/novedad3'
      },
      {
        id: 3,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura16.png',
        date: '28 de septiembre de 2021',
        description: 'Se otorgó validez al Sistema de Educación a Distancia del Instituto Universitario de Gendarmería Nacional',
        location: 'CABA: Educación a Distancia',
        route: 'novedades/novedad4'
      },
      {
        id: 4,
        title: 'Educación Superior',        
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura15.png',
        date: '23 de junio de 2021',
        description: 'El Instituto Universitario de Gendarmería Nacional participó en la Reunión Plenaria RUEDA',
        location: 'CABA: Educación a Distancia',
        route: 'novedades/novedad5'
      },
      {
        id: 5,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura14.png',
        date: '26 de mayo de 2021',
        description: 'Capacitación sobre las estrategias y recursos en la enseñanza virtual',
        location: 'CABA: CENEDIS - IUGNA',
        route: 'novedades/novedad6'
      },
      {
        id: 6,
        title: 'Oferta Educativa',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura13.png',
        date: '30 de abril de 2021',
        description: 'Inscripciones abiertas para los Cursos de Nivelación de los Ciclos de Licenciaturas',
        location: 'Oferta Educativa: Unidad Académica Escuela Superior',
        route: 'novedades/novedad7'
      },
      
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

}
