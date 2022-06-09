import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuofertaComponent } from './menuoferta.component';

describe('MenuofertaComponent', () => {
  let component: MenuofertaComponent;
  let fixture: ComponentFixture<MenuofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuofertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
