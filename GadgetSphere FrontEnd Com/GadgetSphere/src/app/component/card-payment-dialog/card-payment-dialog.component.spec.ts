import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaymentDialogComponent } from './card-payment-dialog.component';

describe('CardPaymentDialogComponent', () => {
  let component: CardPaymentDialogComponent;
  let fixture: ComponentFixture<CardPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPaymentDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
