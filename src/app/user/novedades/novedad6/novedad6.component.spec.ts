import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad6Component } from './novedad6.component';

describe('Novedad6Component', () => {
  let component: Novedad6Component;
  let fixture: ComponentFixture<Novedad6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
