import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad10Component } from './novedad10.component';

describe('Novedad10Component', () => {
  let component: Novedad10Component;
  let fixture: ComponentFixture<Novedad10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
