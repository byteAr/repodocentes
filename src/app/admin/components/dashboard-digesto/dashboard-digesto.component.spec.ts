import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDigestoComponent } from './dashboard-digesto.component';

describe('DashboardDigestoComponent', () => {
  let component: DashboardDigestoComponent;
  let fixture: ComponentFixture<DashboardDigestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDigestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDigestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
