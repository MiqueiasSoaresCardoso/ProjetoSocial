import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasAcoes } from './nossas-acoes';

describe('NossasAcoes', () => {
  let component: NossasAcoes;
  let fixture: ComponentFixture<NossasAcoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossasAcoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossasAcoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
