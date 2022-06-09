import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosInvestigacionComponent } from './ciclos-investigacion.component';

describe('CiclosInvestigacionComponent', () => {
  let component: CiclosInvestigacionComponent;
  let fixture: ComponentFixture<CiclosInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclosInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclosInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
