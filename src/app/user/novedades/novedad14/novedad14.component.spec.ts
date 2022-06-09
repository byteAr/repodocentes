import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad14Component } from './novedad14.component';

describe('Novedad14Component', () => {
  let component: Novedad14Component;
  let fixture: ComponentFixture<Novedad14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
