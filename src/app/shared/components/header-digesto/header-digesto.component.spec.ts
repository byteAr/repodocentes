import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDigestoComponent } from './header-digesto.component';

describe('HeaderDigestoComponent', () => {
  let component: HeaderDigestoComponent;
  let fixture: ComponentFixture<HeaderDigestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDigestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDigestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
