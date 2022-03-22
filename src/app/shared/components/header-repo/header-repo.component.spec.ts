import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRepoComponent } from './header-repo.component';

describe('HeaderRepoComponent', () => {
  let component: HeaderRepoComponent;
  let fixture: ComponentFixture<HeaderRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
