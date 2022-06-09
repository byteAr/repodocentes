import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscugenOfertaComponent } from './escugen-oferta.component';

describe('EscugenOfertaComponent', () => {
  let component: EscugenOfertaComponent;
  let fixture: ComponentFixture<EscugenOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscugenOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscugenOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
