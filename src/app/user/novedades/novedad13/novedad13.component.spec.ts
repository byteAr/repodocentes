import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad13Component } from './novedad13.component';

describe('Novedad13Component', () => {
  let component: Novedad13Component;
  let fixture: ComponentFixture<Novedad13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
