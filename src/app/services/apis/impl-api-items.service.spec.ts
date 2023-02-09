import { TestBed } from '@angular/core/testing';

import { ImplApiItemsService } from './impl-api-items.service';

describe('ImplApiItemsService', () => {
  let service: ImplApiItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImplApiItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
