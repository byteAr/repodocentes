import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActualizacionComponent } from './header-actualizacion.component';

describe('HeaderActualizacionComponent', () => {
  let component: HeaderActualizacionComponent;
  let fixture: ComponentFixture<HeaderActualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderActualizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
