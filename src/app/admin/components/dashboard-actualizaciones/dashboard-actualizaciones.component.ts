import { Component,ViewChild, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-dashboard-actualizaciones',
  templateUrl: './dashboard-actualizaciones.component.html',
  styleUrls: ['./dashboard-actualizaciones.component.css']
})
export class DashboardActualizacionesComponent {
  
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
