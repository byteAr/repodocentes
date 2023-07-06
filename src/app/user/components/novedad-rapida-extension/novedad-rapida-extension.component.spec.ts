import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadRapidaExtensionComponent } from './novedad-rapida-extension.component';

describe('NovedadRapidaExtensionComponent', () => {
  let component: NovedadRapidaExtensionComponent;
  let fixture: ComponentFixture<NovedadRapidaExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovedadRapidaExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadRapidaExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
