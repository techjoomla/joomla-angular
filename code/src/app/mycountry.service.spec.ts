import { TestBed, inject } from '@angular/core/testing';

import { MycountryService } from './mycountry.service';

describe('MycountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MycountryService]
    });
  });

  it('should be created', inject([MycountryService], (service: MycountryService) => {
    expect(service).toBeTruthy();
  }));
});
