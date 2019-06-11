import { TestBed } from '@angular/core/testing';

import { MochilaService } from './mochila.service';

describe('MochilaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MochilaService = TestBed.get(MochilaService);
    expect(service).toBeTruthy();
  });
});
