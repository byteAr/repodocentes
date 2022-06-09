import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusuperCiclosComponent } from './escusuper-ciclos.component';

describe('EscusuperCiclosComponent', () => {
  let component: EscusuperCiclosComponent;
  let fixture: ComponentFixture<EscusuperCiclosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusuperCiclosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusuperCiclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
