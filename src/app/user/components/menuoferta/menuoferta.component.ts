import { Component } from '@angular/core';

@Component({
  selector: 'app-menuoferta',
  templateUrl: './menuoferta.component.html',
  styleUrls: ['./menuoferta.component.css'],
  standalone: false
})
export class MenuofertaComponent {

  openIndex: number | null = null;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
}
