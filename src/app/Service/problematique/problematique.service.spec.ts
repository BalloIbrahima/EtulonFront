import { TestBed } from '@angular/core/testing';

import { ProblematiqueService } from './problematique.service';

describe('ProblematiqueService', () => {
  let service: ProblematiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblematiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
