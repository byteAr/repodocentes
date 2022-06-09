import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novedad5Component } from './novedad5.component';

describe('Novedad5Component', () => {
  let component: Novedad5Component;
  let fixture: ComponentFixture<Novedad5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novedad5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novedad5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
