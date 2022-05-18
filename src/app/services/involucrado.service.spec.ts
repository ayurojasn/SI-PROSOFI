import { TestBed } from '@angular/core/testing';

import { InvolucradoService } from './involucrado.service';

describe('InvolucradoService', () => {
  let service: InvolucradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvolucradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
