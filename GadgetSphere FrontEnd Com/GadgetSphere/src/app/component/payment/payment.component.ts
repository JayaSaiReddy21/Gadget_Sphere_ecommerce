import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  creditCardForm!: FormGroup;
  cardNumber! :any;
  cardHolderName: any;
  expiryDate: any;
  cvv: any;

  constructor(private router:Router, private formBuilder: FormBuilder){}

  ngOnInit() {
    
  }

 

    
  
 
  
  selectedPaymentMethod!: string;
  userId : any;

   iscardNumberValid: boolean = false;
  cardNumberValid(event: any)
  {
    const input = event.target.value;
    console.log("11111");
    if (input.length !== 16 || isNaN(parseInt(input))) {
      this.cardNumber = null; // Reset the value
    } else {
      this.cardNumber = input;
    }
  }

  cardHolderNameValid(event: any) {
    const input = event.target.value;
    // Your validation logic here
    // For example, if the card holder name is required:
    if (!input.trim()) {
      this.cardHolderName = null; // Reset the value
    } else {
      this.cardHolderName = input;
    }
  }

  // Validation method for expiry date
  expiryDateValid(event: any) {
    const input = event.target.value;
    // Your validation logic here
    // For example, if the expiry date format is required:
    if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(input)) {
      this.expiryDate = null; // Reset the value
    } else {
      this.expiryDate = input;
    }
  }

  // Validation method for CVV
  cvvValid(event: any) {
    const input = event.target.value;
    // Your validation logic here
    // For example, if the CVV is required to be 3 digits:
    if (input.length !== 3 || isNaN(parseInt(input))) {
      this.cvv = null; // Reset the value
    } else {
      this.cvv = input;
    }
  }

  submitForm() {
    // Your submission logic here, if needed
    console.log('Card Number:', this.cardNumber);
    console.log('Card Holder Name:', this.cardHolderName);
    console.log('Expiry Date:', this.expiryDate);
    console.log('CVV:', this.cvv);
  }
  

  selectPaymentMethod() {
    // Implement logic based on selected payment method
    this.userId=sessionStorage.getItem('userId');
    console.log('Selected payment method:', this.selectedPaymentMethod);
    // You can perform actions based on the selected payment method here
    alert("Your Order Placed Succesfully");
    this.router.navigate(['showproducts',this.userId]);
  }

  

  // buttonColor :any = "white";
  // buttonType:any  = "buy";
  // isCustomSize = false;
  // buttonWidth = 240;
  // buttonHeight = 40;
  // isTop = window === window.top;
  // paddingTop=20;

  
  // paymentRequest :any = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: "CARD",
  //       parameters: {
  //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  //         allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
  //       },
  //       tokenizationSpecification: {
  //         type: "PAYMENT_GATEWAY",
  //         parameters: {
  //           gateway: "example",
  //           gatewayMerchantId: "exampleGatewayMerchantId"
  //         }
  //       }
  //     }
  //   ],
  //   merchantInfo: {
  //     merchantId: "12345678901234567890",
  //     merchantName: "Demo Merchant"
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: "FINAL",
  //     totalPriceLabel: "Total",
  //     totalPrice: "100.00",
  //     currencyCode: "USD",
  //     countryCode: "US"
  //   }
  // };

  // onLoadPaymentData(event: any) {
  //   console.log("load payment data", event.detail);
  // }
}



