import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
    selector: 'app-header-repo',
    templateUrl: './header-repo.component.html',
    styleUrls: ['./header-repo.component.css'],
    standalone: false
})
export class HeaderRepoComponent {

  menuOpen = false;

  get usuario() {
    return this.authService.usuario;
  }

  constructor(private authService: AuthService, private router: Router) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.userDropdown')) {
      this.menuOpen = false;
    }
  }

  logout(): void {
    this.menuOpen = false;
    this.authService.logout();
  }
}
