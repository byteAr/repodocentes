import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad18Component } from './novedad18.component';

describe('Novedad18Component', () => {
  let component: Novedad18Component;
  let fixture: ComponentFixture<Novedad18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
