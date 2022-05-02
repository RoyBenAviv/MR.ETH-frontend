import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptosChartComponent } from './cryptos-chart.component';

describe('CryptosChartComponent', () => {
  let component: CryptosChartComponent;
  let fixture: ComponentFixture<CryptosChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptosChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptosChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
