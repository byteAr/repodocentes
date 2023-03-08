import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNovedadComponent } from './new-novedad.component';

describe('NewNovedadComponent', () => {
  let component: NewNovedadComponent;
  let fixture: ComponentFixture<NewNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNovedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
