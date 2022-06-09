import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaEscusuperComponent } from './biblioteca-escusuper.component';

describe('BibliotecaEscusuperComponent', () => {
  let component: BibliotecaEscusuperComponent;
  let fixture: ComponentFixture<BibliotecaEscusuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaEscusuperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaEscusuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
