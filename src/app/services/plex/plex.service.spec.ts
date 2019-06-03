import { TestBed } from '@angular/core/testing';

import { PlexService } from './plex.service';

describe('PlexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlexService = TestBed.get(PlexService);
    expect(service).toBeTruthy();
  });
});
