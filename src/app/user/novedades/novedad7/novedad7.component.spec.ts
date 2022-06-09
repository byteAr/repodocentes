import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad7Component } from './novedad7.component';

describe('Novedad7Component', () => {
  let component: Novedad7Component;
  let fixture: ComponentFixture<Novedad7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
