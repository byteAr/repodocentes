import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad12Component } from './novedad12.component';

describe('Novedad12Component', () => {
  let component: Novedad12Component;
  let fixture: ComponentFixture<Novedad12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
