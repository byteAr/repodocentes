import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosAdminPublicaComponent } from './ciclos-admin-publica.component';

describe('CiclosAdminPublicaComponent', () => {
  let component: CiclosAdminPublicaComponent;
  let fixture: ComponentFixture<CiclosAdminPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclosAdminPublicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclosAdminPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
