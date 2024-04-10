import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent implements OnInit {

  @ViewChild('container') container!: ElementRef;
  title: string = 'Gendarmeria Nacional Argntina'


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

  //Método de acordeón
  activeACordeon(): void {
  const acordeon = this.container.nativeElement;
  this.render2.addClass(acordeon,'visible')


  }



}
