import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IugnaCinComponent } from './iugna-cin.component';

describe('IugnaCinComponent', () => {
  let component: IugnaCinComponent;
  let fixture: ComponentFixture<IugnaCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IugnaCinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IugnaCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
