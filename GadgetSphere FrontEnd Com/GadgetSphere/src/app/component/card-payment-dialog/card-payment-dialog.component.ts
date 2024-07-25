import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BankserverService } from '../../services/bankserver.service';
import { ProductsInformation } from '../showproducts/showproducts.component';
import { Router } from '@angular/router';
import { Payment } from '../../payment';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-card-payment-dialog',
  templateUrl: './card-payment-dialog.component.html',
  styleUrl: './card-payment-dialog.component.css'
})
export class CardPaymentDialogComponent implements OnInit {
  cardPaymentForm!: FormGroup;

bankserver = new Bankserver(0,0,0,new Date(),'');
cardNumber!:number;
cardCvv!:number;
expiryDate!:Date;
cardHolderName!:string
productQuantity!: number;
productId!:number;



productDetails!:ProductsInformation;

b!: boolean;
a!: number ;
  quantity!: number;
  userId: any;
  total: any;

  paymentMethod:any;
  productPrice: any;

  payment :any;

  

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CardPaymentDialogComponent>,
    private bankServer : BankserverService,
    private router:Router,
    private paymentService:PaymentService
  ) { }

  ngOnInit(): void {
    this.cardPaymentForm = this.formBuilder.group({
      cardholderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });

    this.userId=sessionStorage.getItem('userId');
    this.paymentMethod=sessionStorage.getItem('pmethod');
    this.productPrice=sessionStorage.getItem('pprice');
  }

  onSubmit(): void {
    if (this.cardPaymentForm.valid) {
      // here we access form control values using the get() method
      const cardholderName = this.cardPaymentForm.get('cardholderName')?.value;
      const cardNumber = this.cardPaymentForm.get('cardNumber')?.value;
      const expiryDate = this.cardPaymentForm.get('expiryDate')?.value;
      const cvv = this.cardPaymentForm.get('cvv')?.value;
      
      console.log('Card Payment Form Submitted:', this.cardPaymentForm.value);
  
      
      this.bankServer.findCardDetails(cardNumber, cvv, expiryDate, cardholderName).subscribe(
        Response => {
          console.log("card details from backend");
          console.log(Response)
          if (Response == null) {

            alert("Card details not found")
            this.router.navigate(['index']);
          } else {
            
            this.b = confirm("YOUR ORDER IS CONFIRMED");
            if (this.b == true) 
            {
              sessionStorage.setItem('cardNumber',cardNumber)
              sessionStorage.setItem('cardHolderName',cardholderName)
              sessionStorage.setItem('cardCvv',cvv)
              sessionStorage.setItem('expiryDate',expiryDate)
              sessionStorage.setItem('cardStatus',"Success");
            
            } else {
              alert("Your order is not placed")
            }
          }
        });
  
      this.dialogRef.close();
    } else {
      console.log('Card Payment Form is Invalid.');
    }
  }
  

  onCancelClick(): void {
    
    this.dialogRef.close();
  }

}

export class Bankserver {
  constructor(

    public id: number,
    public cardNumber: number,
    public cardCvv: number,
    public expiryDate: Date,
    public cardholderName : string
  ) { }
}