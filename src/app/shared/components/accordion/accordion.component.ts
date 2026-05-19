import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChildren
} from '@angular/core';
import { Params } from '@angular/router';

export interface AccordionAction {
  label: string;
  /** Ruta: puede ser string o array para parámetros segmentados */
  link: string | any[];
  queryParams?: Params;
  // puedes añadir icono, fragment, etc. si lo necesitas
}

export interface AccordionItem {
  title: string;
  content?: string;      // Puedes cambiar a TemplateRef si luego quieres contenido proyectado
  disabled?: boolean;
  actions?: AccordionAction[];

}


@Component({
  selector: 'app-accordion',
  standalone: false,
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  /** true = permite múltiples paneles abiertos. false = sólo uno abierto */
  @Input() multi = false;
   @Input() itemTemplate?: TemplateRef<any>;

  /** índice del header enfocable (roving tabindex) */
  activeHeaderIndex = 0;
  /** set de índices abiertos */
  openSet = new Set<number>();

  @ViewChildren('headerBtn') headerBtns!: QueryList<ElementRef<HTMLButtonElement>>;

  private static nextId = 0;
  baseId = `acc-${AccordionComponent.nextId++}`;

  isOpen(i: number) {
    return this.openSet.has(i);
  }

  trackByIndex(index: number, _item: AccordionItem): number {
  return index;
}

  toggle(i: number) {
    if (this.items[i]?.disabled) return;

    if (this.multi) {
      this.isOpen(i) ? this.openSet.delete(i) : this.openSet.add(i);
    } else {
      // modo "solo uno": cierra todo y abre éste
      this.openSet.clear();
      this.openSet.add(i);
    }
  }

  // ----- Accesibilidad teclado -----
  onHeaderKeydown(event: KeyboardEvent, i: number) {
    const enabledIndexes = this.items
      .map((_, idx) => idx)
      .filter(idx => !this.items[idx]?.disabled);

    const currentPos = enabledIndexes.indexOf(i);
    const focusIndex = (pos: number) => this.focusHeader(enabledIndexes[pos]);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (currentPos >= 0) {
          const nextPos = (currentPos + 1) % enabledIndexes.length;
          focusIndex(nextPos);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (currentPos >= 0) {
          const prevPos = (currentPos - 1 + enabledIndexes.length) % enabledIndexes.length;
          focusIndex(prevPos);
        }
        break;
      case 'Home':
        event.preventDefault();
        focusIndex(0);
        break;
      case 'End':
        event.preventDefault();
        focusIndex(enabledIndexes.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.toggle(i);
        break;
    }
  }

  private focusHeader(i: number) {
    this.activeHeaderIndex = i;
    const el = this.headerBtns?.get(i)?.nativeElement;
    el?.focus();
  }
}
