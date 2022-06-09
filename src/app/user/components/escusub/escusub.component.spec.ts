import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscusubComponent } from './escusub.component';

describe('EscusubComponent', () => {
  let component: EscusubComponent;
  let fixture: ComponentFixture<EscusubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscusubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscusubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
