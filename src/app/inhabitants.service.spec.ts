import { TestBed } from '@angular/core/testing';

import { InhabitantsService } from './inhabitants.service';

describe('InhabitantsService', () => {
  let service: InhabitantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InhabitantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
