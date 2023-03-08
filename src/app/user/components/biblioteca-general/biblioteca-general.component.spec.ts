import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaGeneralComponent } from './biblioteca-general.component';

describe('BibliotecaGeneralComponent', () => {
  let component: BibliotecaGeneralComponent;
  let fixture: ComponentFixture<BibliotecaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
