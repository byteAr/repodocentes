import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  private id: any;
  public verificado: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private http: AuthService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.verifyEmail(this.id)
      .subscribe(resp => {
        if(resp.ok) {
          this.verificado = 1
        } else {
          this.verificado = 2
        }
      })
  }

}
