import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad11Component } from './novedad11.component';

describe('Novedad11Component', () => {
  let component: Novedad11Component;
  let fixture: ComponentFixture<Novedad11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
