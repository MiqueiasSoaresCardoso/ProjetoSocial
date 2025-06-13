import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contribua } from './contribua';

describe('Contribua', () => {
  let component: Contribua;
  let fixture: ComponentFixture<Contribua>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contribua]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contribua);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
