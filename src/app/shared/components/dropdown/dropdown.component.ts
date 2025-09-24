import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  @Input() label = 'Selecciona';
  @Input() options: DropdownOption[] = [];
  @Output() select = new EventEmitter<DropdownOption>();

  open = false;
  activeIndex = -1;

  @ViewChild('menu', { static: false }) menuRef!: ElementRef;

  constructor(private host: ElementRef<HTMLElement>) {}

  toggle() {
    this.open = !this.open;
    if (this.open) {
      setTimeout(() => this.focusFirst(), 0);
    }
  }

  onSelect(opt: DropdownOption) {
    if (opt.disabled) return;
    this.select.emit(opt);
    this.open = false;
  }

  private focusFirst() {
    this.activeIndex = this.options.findIndex(o => !o.disabled);
    this.focusActive();
  }

  private move(dir: number) {
    const len = this.options.length;
    let i = this.activeIndex;
    let tries = 0;
    do {
      i = (i + dir + len) % len;
      tries++;
    } while (this.options[i]?.disabled && tries <= len + 1);
    this.activeIndex = i;
    this.focusActive();
  }

  private focusActive() {
    const el = this.menuRef?.nativeElement?.querySelector(
      `[data-index="${this.activeIndex}"]`
    ) as HTMLElement | null;
    el?.focus();
  }

  // teclado dentro del dropdown
  onKeydown(event: KeyboardEvent) {
    if (!this.open) return;
    switch (event.key) {
      case 'ArrowDown': event.preventDefault(); this.move(1); break;
      case 'ArrowUp':   event.preventDefault(); this.move(-1); break;
      case 'Enter':     event.preventDefault();
        if (this.activeIndex >= 0) this.onSelect(this.options[this.activeIndex]);
        break;
    }
  }

  // clic fuera
  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    if (!this.host.nativeElement.contains(ev.target as Node)) this.open = false;
  }

  // escape
  @HostListener('document:keydown.escape')
  closeOnEsc() { this.open = false; }
}
