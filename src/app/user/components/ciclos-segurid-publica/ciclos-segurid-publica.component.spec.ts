import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosSeguridPublicaComponent } from './ciclos-segurid-publica.component';

describe('CiclosSeguridPublicaComponent', () => {
  let component: CiclosSeguridPublicaComponent;
  let fixture: ComponentFixture<CiclosSeguridPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclosSeguridPublicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclosSeguridPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
