import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStandartComponent } from './dashboard-standart.component';

describe('DashboardStandartComponent', () => {
  let component: DashboardStandartComponent;
  let fixture: ComponentFixture<DashboardStandartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardStandartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStandartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
