import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-repo',
    templateUrl: './footer-repo.component.html',
    styleUrls: ['./footer-repo.component.css'],
    standalone: false
})
export class FooterRepoComponent implements OnInit {

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void { }

}
