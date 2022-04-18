import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import { Document } from '../../interfaces/document.interface';
import { environment } from '../../../../environments/environment.prod';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-docente-detail',
  templateUrl: './docente-detail.component.html',
  styleUrls: ['./docente-detail.component.css']
})
export class DocenteDetailComponent implements OnInit {

  private fileTmp:any;
  private id: any;
  documents: Document[] = []
  baseUrl = environment.baseUrl;
  docente: any;

  constructor( private docService: DocumentService,
               private activatedRoute: ActivatedRoute,
               private messageService: MessageService,
               private usersService: UsersService,
               private documentService: DocumentService,
               private confirmationService: ConfirmationService,) { }

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

  deleteDocument(document:any) {
    this.confirmationService.confirm({
      message: 'Está seguro de eliminar este documento?. Esta acción es irreversible',
      header: 'ATENCIÓN!',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.documentService.deleteDocument(document.nombreenbase)
        .subscribe(resp => {
          if(resp.ok) {
            this.documents = this.documents.filter(val => val.nombreenbase !== document.nombreenbase);
            this.messageService.add({severity:'success', summary: 'Operación Exitosa', detail: 'Archivo eliminado', life: 3000});
          } else {
            this.messageService.add({severity:'success', summary: 'Operación Fallida', detail: 'No se pudo eliminar el archivo', life: 3000});
          }          
        })
          //this.selectedProducts = null;
          
      }
    });
    
  }
    
  getDocuments() {    
    this.docService.getDocumentsById(this.id)
    .subscribe(resp => {
     this.documents = resp.rows
    })
  }

  getFile(event: any): any {
    this.fileTmp = event.files;

    
    this.sendFile()
    
  }

  sendFile() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    const body = new FormData();
    if(!body) {
      this.messageService.add({severity:'error', summary: 'Operación Exitosa', detail: `Error`, life: 3000});
    }
    this.fileTmp.forEach((item: any) => {
      body.append('document', item);
    });
    /* body.append('document', this.fileTmp.fileRaw, this.fileTmp.fileName); */
    body.append('id', this.id)
    this.docService.sendPost(body)
    .subscribe(resp =>  {
      if(resp.ok) {
        this.messageService.add({severity:'success', summary: 'Operación Exitosa', detail: `${resp.message}`, life: 3000});
        this.getDocuments()
      }
    })
  }

}
