import { TestBed, inject } from '@angular/core/testing';

import { GbooksService } from './gbooks.service';

describe('GbooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GbooksService]
    });
  });

  it('should be created', inject([GbooksService], (service: GbooksService) => {
    expect(service).toBeTruthy();
  }));
});
