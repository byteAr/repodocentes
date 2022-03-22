import { TestBed } from '@angular/core/testing';

import { ValidarRolAdminGuard } from './validar-rol-admin.guard';

describe('ValidarRolAdminGuard', () => {
  let guard: ValidarRolAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRolAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
