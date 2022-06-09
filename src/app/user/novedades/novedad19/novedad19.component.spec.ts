import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad19Component } from './novedad19.component';

describe('Novedad19Component', () => {
  let component: Novedad19Component;
  let fixture: ComponentFixture<Novedad19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
