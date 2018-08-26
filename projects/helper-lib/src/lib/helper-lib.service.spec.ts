import { TestBed, inject } from '@angular/core/testing';

import { HelperLibService } from './helper-lib.service';

describe('HelperLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperLibService]
    });
  });

  it('should be created', inject([HelperLibService], (service: HelperLibService) => {
    expect(service).toBeTruthy();
  }));
});
