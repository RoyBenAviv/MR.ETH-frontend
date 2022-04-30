import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpChartComponent } from './mp-chart.component';

describe('MpChartComponent', () => {
  let component: MpChartComponent;
  let fixture: ComponentFixture<MpChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
