import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaEscusubComponent } from './biblioteca-escusub.component';

describe('BibliotecaEscusubComponent', () => {
  let component: BibliotecaEscusubComponent;
  let fixture: ComponentFixture<BibliotecaEscusubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaEscusubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaEscusubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
