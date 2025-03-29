import { TestBed } from '@angular/core/testing';

import { DaccSideMenuService } from './dacc-side-menu.service';

describe('DaccSideMenuService', () => {
  let service: DaccSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaccSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
