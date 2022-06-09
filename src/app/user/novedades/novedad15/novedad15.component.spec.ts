import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad15Component } from './novedad15.component';

describe('Novedad15Component', () => {
  let component: Novedad15Component;
  let fixture: ComponentFixture<Novedad15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
