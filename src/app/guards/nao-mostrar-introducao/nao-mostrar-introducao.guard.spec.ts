import { TestBed, async, inject } from '@angular/core/testing';

import { NaoMostrarIntroducaoGuard } from './nao-mostrar-introducao.guard';

describe('NaoMostrarIntroducaoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaoMostrarIntroducaoGuard]
    });
  });

  it('should ...', inject([NaoMostrarIntroducaoGuard], (guard: NaoMostrarIntroducaoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
