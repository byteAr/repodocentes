import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad4Component } from './novedad4.component';

describe('Novedad4Component', () => {
  let component: Novedad4Component;
  let fixture: ComponentFixture<Novedad4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
