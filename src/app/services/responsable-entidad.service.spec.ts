import { TestBed } from '@angular/core/testing';

import { ResponsableEntidadService } from './responsable-entidad.service';

describe('ResponsableEntidadService', () => {
  let service: ResponsableEntidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableEntidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
