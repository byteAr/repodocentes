import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusuperPregradoComponent } from './escusuper-pregrado.component';

describe('EscusuperPregradoComponent', () => {
  let component: EscusuperPregradoComponent;
  let fixture: ComponentFixture<EscusuperPregradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusuperPregradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusuperPregradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
