import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusuperCaligrafoPublicoComponent } from './escusuper-caligrafo-publico.component';

describe('EscusuperCaligrafoPublicoComponent', () => {
  let component: EscusuperCaligrafoPublicoComponent;
  let fixture: ComponentFixture<EscusuperCaligrafoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusuperCaligrafoPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusuperCaligrafoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
