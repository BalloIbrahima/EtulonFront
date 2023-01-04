import { TestBed } from '@angular/core/testing';

import { JeuService } from './jeu.service';

describe('JeuService', () => {
  let service: JeuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
