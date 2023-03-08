import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-dashboard-actualizaciones',
  templateUrl: './body-dashboard-actualizaciones.component.html',
  styleUrls: ['./body-dashboard-actualizaciones.component.css']
})
export class BodyDashboardActualizacionesComponent{

  @Input() collapsed = true;
  @Input() screenWidth = 769;

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed! && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

}
