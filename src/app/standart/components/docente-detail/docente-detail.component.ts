import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../../admin/services/document.service';
import { Document } from '../../../admin/interfaces/document.interface';
import { environment } from '../../../../environments/environment.prod';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { UsersService } from '../../../admin/services/users.service';

@Component({
  selector: 'app-docente-detail',
  templateUrl: './docente-detail.component.html',
  styleUrls: ['./docente-detail.component.css']
})
export class DocenteDetailComponent implements OnInit {

  private id: any;
  documents: Document[] = []
  baseUrl = environment.baseUrl;
  docente: any;

  constructor( private docService: DocumentService,
               private activatedRoute: ActivatedRoute,
               private usersService: UsersService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getDocuments();
    this.getUser()
  }

  getUser() {    
    this.usersService.getDocente(this.id)
    .subscribe(resp => {
      this.docente = resp.rows[0];
    })
  }

  
    
  getDocuments() {    
    this.docService.getDocumentsById(this.id)
    .subscribe(resp => {
     this.documents = resp.rows
    })
  }

  

  
}
