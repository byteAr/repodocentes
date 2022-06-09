import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscugenRegimenCursadaComponent } from './escugen-regimen-cursada.component';

describe('EscugenRegimenCursadaComponent', () => {
  let component: EscugenRegimenCursadaComponent;
  let fixture: ComponentFixture<EscugenRegimenCursadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscugenRegimenCursadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscugenRegimenCursadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
