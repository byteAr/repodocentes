import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusubOfertaComponent } from './escusub-oferta.component';

describe('EscusubOfertaComponent', () => {
  let component: EscusubOfertaComponent;
  let fixture: ComponentFixture<EscusubOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusubOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusubOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
