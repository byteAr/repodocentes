import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-escusuper-caligrafo-publico',
  standalone: false,
  templateUrl: './escusuper-caligrafo-publico.component.html',
  styleUrls: ['./escusuper-caligrafo-publico.component.css']
})
export class EscusuperCaligrafoPublicoComponent implements OnInit {

  items: MenuItem[] = [];
  showLayout = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const useEmbedded = this.route.snapshot.data?.['embed'] === true;
    this.showLayout = !useEmbedded;

    if (!useEmbedded) {
      this.items = [
        { label:'Inicio', routerLink: '/' },
        { label:'Unidad Académica Escuela Superior', routerLink: '/uuaa/escusuper' },
        { label:'Oferta Académica', routerLink:'/uuaa/escusuper/oferta/ciclos' },
        { label:'Calígrafo Público Nacional', disabled: true }
      ];
    }
  }

}

