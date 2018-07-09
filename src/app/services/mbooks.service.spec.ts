import { TestBed, inject } from '@angular/core/testing';

import { MbooksService } from './mbooks.service';

describe('MbooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MbooksService]
    });
  });

  it('should be created', inject([MbooksService], (service: MbooksService) => {
    expect(service).toBeTruthy();
  }));
});
