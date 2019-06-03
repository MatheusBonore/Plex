import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucoesComponent } from './resolucoes.component';

describe('ResolucoesComponent', () => {
  let component: ResolucoesComponent;
  let fixture: ComponentFixture<ResolucoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolucoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
