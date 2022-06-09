import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusubTecnicaturasComponent } from './escusub-tecnicaturas.component';

describe('EscusubTecnicaturasComponent', () => {
  let component: EscusubTecnicaturasComponent;
  let fixture: ComponentFixture<EscusubTecnicaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusubTecnicaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusubTecnicaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
