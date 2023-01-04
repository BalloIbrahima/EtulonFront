import { TestBed } from '@angular/core/testing';

import { CitoyenService } from './citoyen.service';

describe('CitoyenService', () => {
  let service: CitoyenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitoyenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
