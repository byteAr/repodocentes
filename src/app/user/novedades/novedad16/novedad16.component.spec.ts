import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad16Component } from './novedad16.component';

describe('Novedad16Component', () => {
  let component: Novedad16Component;
  let fixture: ComponentFixture<Novedad16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
