import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusuperNivelacionComponent } from './escusuper-nivelacion.component';

describe('EscusuperNivelacionComponent', () => {
  let component: EscusuperNivelacionComponent;
  let fixture: ComponentFixture<EscusuperNivelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusuperNivelacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusuperNivelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
