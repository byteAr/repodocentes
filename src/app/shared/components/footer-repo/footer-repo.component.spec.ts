import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRepoComponent } from './footer-repo.component';

describe('FooterRepoComponent', () => {
  let component: FooterRepoComponent;
  let fixture: ComponentFixture<FooterRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
