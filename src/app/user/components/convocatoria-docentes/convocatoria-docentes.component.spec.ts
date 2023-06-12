import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaDocentesComponent } from './convocatoria-docentes.component';

describe('ConvocatoriaDocentesComponent', () => {
  let component: ConvocatoriaDocentesComponent;
  let fixture: ComponentFixture<ConvocatoriaDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoriaDocentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriaDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
