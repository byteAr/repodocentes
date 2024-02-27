import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadRapidaPostgradoComponent } from './novedad-rapida-postgrado.component';

describe('NovedadRapidaPostgradoComponent', () => {
  let component: NovedadRapidaPostgradoComponent;
  let fixture: ComponentFixture<NovedadRapidaPostgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovedadRapidaPostgradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadRapidaPostgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
