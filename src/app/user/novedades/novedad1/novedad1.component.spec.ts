import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad1Component } from './novedad1.component';

describe('Novedad1Component', () => {
  let component: Novedad1Component;
  let fixture: ComponentFixture<Novedad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
