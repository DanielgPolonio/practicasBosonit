import { TestBed } from '@angular/core/testing';

import { CustomHttpInterceptorServiceService } from './custom-http-interceptor-service.service';

describe('CustomHttpInterceptorServiceService', () => {
  let service: CustomHttpInterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomHttpInterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
