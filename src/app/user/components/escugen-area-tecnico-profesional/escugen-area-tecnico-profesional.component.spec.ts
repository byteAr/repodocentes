import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscugenAreaTecnicoProfesionalComponent } from './escugen-area-tecnico-profesional.component';

describe('EscugenAreaTecnicoProfesionalComponent', () => {
  let component: EscugenAreaTecnicoProfesionalComponent;
  let fixture: ComponentFixture<EscugenAreaTecnicoProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscugenAreaTecnicoProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscugenAreaTecnicoProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
