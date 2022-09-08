import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActualizacionesComponent } from './dashboard-actualizaciones.component';

describe('DashboardActualizacionesComponent', () => {
  let component: DashboardActualizacionesComponent;
  let fixture: ComponentFixture<DashboardActualizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardActualizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActualizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
