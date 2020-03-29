import { TestBed } from '@angular/core/testing';

import { EwebcallService } from './ewebcall.service';

describe('EwebcallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EwebcallService = TestBed.get(EwebcallService);
    expect(service).toBeTruthy();
  });
});
