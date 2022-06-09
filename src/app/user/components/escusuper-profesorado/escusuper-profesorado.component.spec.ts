import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusuperProfesoradoComponent } from './escusuper-profesorado.component';

describe('EscusuperProfesoradoComponent', () => {
  let component: EscusuperProfesoradoComponent;
  let fixture: ComponentFixture<EscusuperProfesoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusuperProfesoradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusuperProfesoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
