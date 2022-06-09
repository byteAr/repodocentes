import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad8Component } from './novedad8.component';

describe('Novedad8Component', () => {
  let component: Novedad8Component;
  let fixture: ComponentFixture<Novedad8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
