import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuddComponent } from './uudd.component';

describe('UuddComponent', () => {
  let component: UuddComponent;
  let fixture: ComponentFixture<UuddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UuddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UuddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
