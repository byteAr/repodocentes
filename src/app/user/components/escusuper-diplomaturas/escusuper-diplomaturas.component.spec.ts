import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusuperDiplomaturasComponent } from './escusuper-diplomaturas.component';

describe('EscusuperDiplomaturasComponent', () => {
  let component: EscusuperDiplomaturasComponent;
  let fixture: ComponentFixture<EscusuperDiplomaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusuperDiplomaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusuperDiplomaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
