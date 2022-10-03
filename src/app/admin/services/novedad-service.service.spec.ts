import { TestBed } from '@angular/core/testing';

import { NovedadServiceService } from './novedad-service.service';

describe('NovedadServiceService', () => {
  let service: NovedadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovedadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
