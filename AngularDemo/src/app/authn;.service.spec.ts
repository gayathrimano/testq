import { TestBed } from '@angular/core/testing';

import { Authn;Service } from './authn;.service';

describe('Authn;Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Authn;Service = TestBed.get(Authn;Service);
    expect(service).toBeTruthy();
  });
});
