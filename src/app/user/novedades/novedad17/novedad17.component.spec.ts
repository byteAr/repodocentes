import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad17Component } from './novedad17.component';

describe('Novedad17Component', () => {
  let component: Novedad17Component;
  let fixture: ComponentFixture<Novedad17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
