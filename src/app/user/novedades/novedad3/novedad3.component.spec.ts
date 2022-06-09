import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad3Component } from './novedad3.component';

describe('Novedad3Component', () => {
  let component: Novedad3Component;
  let fixture: ComponentFixture<Novedad3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
