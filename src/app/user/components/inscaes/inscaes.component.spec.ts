import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscaesComponent } from './inscaes.component';

describe('InscaesComponent', () => {
  let component: InscaesComponent;
  let fixture: ComponentFixture<InscaesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscaesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
