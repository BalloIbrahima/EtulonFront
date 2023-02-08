import { TestBed } from '@angular/core/testing';

import { NiveauService } from './niveau.service';

describe('NiveauService', () => {
  let service: NiveauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiveauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
