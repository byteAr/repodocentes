import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaEscugenComponent } from './biblioteca-escugen.component';

describe('BibliotecaEscugenComponent', () => {
  let component: BibliotecaEscugenComponent;
  let fixture: ComponentFixture<BibliotecaEscugenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaEscugenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaEscugenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
