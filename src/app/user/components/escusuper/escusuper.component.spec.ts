import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusuperComponent } from './escusuper.component';

describe('EscusuperComponent', () => {
  let component: EscusuperComponent;
  let fixture: ComponentFixture<EscusuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusuperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
