import { TestBed } from '@angular/core/testing';

import { SchaedualeServiceService } from './schaeduale-service.service';

describe('SchaedualeServiceService', () => {
  let service: SchaedualeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchaedualeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
