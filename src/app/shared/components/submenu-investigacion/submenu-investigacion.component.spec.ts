import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuInvestigacionComponent } from './submenu-investigacion.component';

describe('SubmenuInvestigacionComponent', () => {
  let component: SubmenuInvestigacionComponent;
  let fixture: ComponentFixture<SubmenuInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmenuInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
