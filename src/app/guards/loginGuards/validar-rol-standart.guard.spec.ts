import { TestBed } from '@angular/core/testing';

import { ValidarRolStandartGuard } from './validar-rol-standart.guard';

describe('ValidarRolStandartGuard', () => {
  let guard: ValidarRolStandartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRolStandartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
