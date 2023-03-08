import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDashboardActualizacionesComponent } from './body-dashboard-actualizaciones.component';

describe('BodyDashboardActualizacionesComponent', () => {
  let component: BodyDashboardActualizacionesComponent;
  let fixture: ComponentFixture<BodyDashboardActualizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyDashboardActualizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyDashboardActualizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
