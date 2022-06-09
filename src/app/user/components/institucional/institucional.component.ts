import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent implements OnInit {

  @ViewChild('container') container!: ElementRef;
  

  visible:number=0;

  items: MenuItem[] = [];

  constructor(private render2: Renderer2) {

   }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Institucional', disabled: true}
  ];
  
  }

  mostrar(id:number):void {
    this.visible=id
  }

  activeACordeon(): void {
  const acordeon = this.container.nativeElement;
  this.render2.addClass(acordeon,'visible')     

 /*  for (let i=0; i<acordeon.length; i++) {
    acordeon[i].addEventListener('click', function () {
      this.classList.toggle('activa')

    })
  } */
  }

  

}
