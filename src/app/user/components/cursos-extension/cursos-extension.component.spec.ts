import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosExtensionComponent } from './cursos-extension.component';

describe('CursosExtensionComponent', () => {
  let component: CursosExtensionComponent;
  let fixture: ComponentFixture<CursosExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
