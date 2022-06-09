import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsbarrealComponent } from './insbarreal.component';

describe('InsbarrealComponent', () => {
  let component: InsbarrealComponent;
  let fixture: ComponentFixture<InsbarrealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsbarrealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsbarrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
