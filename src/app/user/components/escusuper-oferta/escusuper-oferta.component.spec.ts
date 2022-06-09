import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusuperOfertaComponent } from './escusuper-oferta.component';

describe('EscusuperOfertaComponent', () => {
  let component: EscusuperOfertaComponent;
  let fixture: ComponentFixture<EscusuperOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusuperOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusuperOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
