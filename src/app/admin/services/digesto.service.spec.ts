import { TestBed } from '@angular/core/testing';

import { DigestoService } from './digesto.service';

describe('DigestoService', () => {
  let service: DigestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
