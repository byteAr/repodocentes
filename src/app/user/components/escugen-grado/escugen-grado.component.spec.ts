import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscugenGradoComponent } from './escugen-grado.component';

describe('EscugenGradoComponent', () => {
  let component: EscugenGradoComponent;
  let fixture: ComponentFixture<EscugenGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscugenGradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscugenGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
