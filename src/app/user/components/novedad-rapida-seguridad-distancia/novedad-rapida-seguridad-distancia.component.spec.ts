import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadRapidaSeguridadDistanciaComponent } from './novedad-rapida-seguridad-distancia.component';

describe('NovedadRapidaSeguridadDistanciaComponent', () => {
  let component: NovedadRapidaSeguridadDistanciaComponent;
  let fixture: ComponentFixture<NovedadRapidaSeguridadDistanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovedadRapidaSeguridadDistanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadRapidaSeguridadDistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
