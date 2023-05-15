import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { checkTokenGuard } from './check-token.guard';

describe('checkTokenGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
