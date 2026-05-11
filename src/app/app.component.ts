import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './shared/services/seo.service';

const PRIVATE_PREFIXES = ['/admin', '/auth', '/invitado'];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private seo: SeoService) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(e => {
      if (PRIVATE_PREFIXES.some(p => e.urlAfterRedirects.startsWith(p))) {
        this.seo.setNoIndex();
      }
    });
  }
}
