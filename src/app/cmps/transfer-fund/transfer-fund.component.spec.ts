import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFundComponent } from './transfer-fund.component';

describe('TransferFundComponent', () => {
  let component: TransferFundComponent;
  let fixture: ComponentFixture<TransferFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
