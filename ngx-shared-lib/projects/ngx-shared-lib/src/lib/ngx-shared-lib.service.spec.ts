import { TestBed } from '@angular/core/testing';

import { NgxSharedLibService } from './ngx-shared-lib.service';

describe('NgxSharedLibService', () => {
  let service: NgxSharedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSharedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
