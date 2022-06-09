import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscugenComponent } from './escugen.component';

describe('EscugenComponent', () => {
  let component: EscugenComponent;
  let fixture: ComponentFixture<EscugenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscugenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscugenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
