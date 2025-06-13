import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosGratuitos } from './recursos-gratuitos';

describe('RecursosGratuitos', () => {
  let component: RecursosGratuitos;
  let fixture: ComponentFixture<RecursosGratuitos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecursosGratuitos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursosGratuitos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
