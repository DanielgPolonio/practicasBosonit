import { TestBed } from '@angular/core/testing';

import { CheckDetailsGuard } from './check-details.guard';

describe('CheckDetailsGuard', () => {
  let guard: CheckDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
