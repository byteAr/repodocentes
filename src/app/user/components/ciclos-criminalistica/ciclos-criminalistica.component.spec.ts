import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosCriminalisticaComponent } from './ciclos-criminalistica.component';

describe('CiclosCriminalisticaComponent', () => {
  let component: CiclosCriminalisticaComponent;
  let fixture: ComponentFixture<CiclosCriminalisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclosCriminalisticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclosCriminalisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
