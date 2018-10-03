import { TestBed, inject } from '@angular/core/testing';

import { CatalogoService } from './catalogo.service';

describe('CatalogoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogoService]
    });
  });

  it('should be created', inject([CatalogoService], (service: CatalogoService) => {
    expect(service).toBeTruthy();
  }));
});
