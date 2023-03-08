import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadRapidaComponent } from './novedad-rapida.component';

describe('NovedadRapidaComponent', () => {
  let component: NovedadRapidaComponent;
  let fixture: ComponentFixture<NovedadRapidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovedadRapidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
