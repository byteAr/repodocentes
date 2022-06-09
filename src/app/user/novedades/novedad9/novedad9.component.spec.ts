import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad9Component } from './novedad9.component';

describe('Novedad9Component', () => {
  let component: Novedad9Component;
  let fixture: ComponentFixture<Novedad9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
