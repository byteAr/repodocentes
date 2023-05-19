import { Component, OnInit } from '@angular/core';
import { DigestoService } from '../../services/digesto.service';
import { MessageService } from 'primeng/api';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-dashboard-digesto',
  templateUrl: './dashboard-digesto.component.html',
  styleUrls: ['./dashboard-digesto.component.css']
})
export class DashboardDigestoComponent implements OnInit {


  constructor( private digestoService: DigestoService,
               private messageService: MessageService,) { }

  ngOnInit(): void {
    this.digestoService.getDigestos()
      .subscribe(data => {
        console.log(data)
      })
  }
  getFile(event:any) {

  }
}
