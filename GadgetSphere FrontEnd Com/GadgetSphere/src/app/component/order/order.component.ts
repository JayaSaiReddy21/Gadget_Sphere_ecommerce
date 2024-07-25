import { Component, OnInit, ɵprovideZonelessChangeDetection } from '@angular/core';

import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { OrderService } from '../../services/order.service';
import { OrderData } from './order';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { CardPaymentDialogComponent } from '../card-payment-dialog/card-payment-dialog.component';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../payment';
import { CartService } from '../../services/cart.service';
import { Product } from '../admin/productlist/productlist.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',  
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})



export class OrderComponent implements OnInit {
  cardHolderName: any;
  cardCvv:any;
  expiryDate: any;
  //cardHolderName:any;
  cardNumber:any;

onPaymentMethodChange(event: any) {
  this.selectedOption = event.value;
}

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  orderData = new OrderData(0, 0, 0, 0, '', 0, '', 0, '', '', '', '', 'pending','',0);
  userId: any;
  productId: any;
  orderQuantity: any;
  paymentMethod: String = '';
  selectedOption: any;
  productName:any;
  cardStatus :any;
  payment :any;

  totalPrice :any;

  productInfo = new Product(0,'',0,'','','','','','',0,'','','','')

  

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private productService:ProductService,
    public dialog: MatDialog,
    private paymentService: PaymentService,
    private cartService: CartService

  ) {}

  product : any;
  multiProduct:any;
  cartList:any;
  countries: string[] = ['India', 'United States', 'Canada', 'Australia'];
  states: { [key: string]: string[] } = {
    India: [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
      'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
      'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
      'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
      'Uttarakhand', 'West Bengal'
    ],
    'United States': ['California', 'Texas', 'Florida', 'New York'],
    Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
    Australia: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia']
  };
  selectedCountry: string = 'India'; // Default country set to India


  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
   this.multiProduct= sessionStorage.getItem('multiProduct')
    if(this.multiProduct=="true")
    {
      this.cartService.findCartByUserId(this.userId).subscribe(
        Response=> {this.cartList=Response;
        console.log(this.cartList);
    })
  }
    this.productId = this.activatedRoute.snapshot.params['productId'];
    this.orderQuantity = this.activatedRoute.snapshot.params['quantity'];

    this.productService.getproductbyid(this.productId).subscribe(
      (Data)=> {this.product=Data,console.log(this.product),this.productName=this.product.productName}
    )

    this.firstFormGroup = this.formBuilder.group({
      fullNameCtrl: ['', Validators.required], // for full name
      phoneNumberCtrl: ['', Validators.required], // for phone number
    });

    this.secondFormGroup = this.formBuilder.group({
      countryCtrl: ['', Validators.required],
      pincodeCtrl: ['', Validators.required],
      flatCtrl: ['', Validators.required],
      landmarkCtrl: ['', Validators.required],
      stateCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this.formBuilder.group({
      selectPaymentCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this.formBuilder.group({
      selectPaymentCtrl: ['Cash On Delivery'],
      cardholderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  onCountryChange(event: any) {
    this.selectedCountry = event.value;
    this.secondFormGroup.get('stateCtrl')?.setValue('');
  }

  

  onSubmit(orderData: any) {
    if(this.multiProduct=="true")
    {
      console.log("Inside Iffffffffffffffffffff")
      for(const product of this.cartList)
      {
        this.orderData.userId = this.userId;
        this.orderData.productId = product.productId;
        this.orderData.orderQuantity = product.selectedQuantity;
        console.log(product.selectedQuantity)
        console.log(this.orderData.orderQuantity)
        this.orderData.productName = product.productName;
        this.orderData.productPrice = product.productPrice;
        sessionStorage.setItem("pprice", this.orderData.productPrice.toString());
    
        // this.orderData.paymentMethod = this.selectedPaymentMethod;
        this.orderData.fullName = this.firstFormGroup.get('fullNameCtrl')?.value;
        this.orderData.phoneNumber = this.firstFormGroup.get('phoneNumberCtrl')?.value;
        this.orderData.country = this.secondFormGroup.get('countryCtrl')?.value;
        this.orderData.pincode = this.secondFormGroup.get('pincodeCtrl')?.value;
        this.orderData.flat = this.secondFormGroup.get('flatCtrl')?.value;
        this.orderData.landmark = this.secondFormGroup.get('landmarkCtrl')?.value;
        this.orderData.state = this.secondFormGroup.get('stateCtrl')?.value;
    
        this.orderData.paymentMethod = this.thirdFormGroup.get('selectPaymentCtrl')?.value;
        sessionStorage.setItem("pmethod", this.orderData.paymentMethod.toString());
    
        console.log(orderData);
        this.cardStatus = sessionStorage.getItem('cardStatus');
       
        if (this.cardStatus === "Success" || this.orderData.paymentMethod === 'Cash On Delivery') 
        {
          this.orderService.saveOrderDetails(this.orderData).subscribe({
            next: () => {
              const fullName = this.firstFormGroup.get('fullNameCtrl')?.value;
              const phoneNumber = this.firstFormGroup.get('phoneNumberCtrl')?.value;
              const country = this.secondFormGroup.get('countryCtrl')?.value;
              const pincode = this.secondFormGroup.get('pincodeCtrl')?.value;
              const flat = this.secondFormGroup.get('flatCtrl')?.value;
              const landmark = this.secondFormGroup.get('landmarkCtrl')?.value;
              const state = this.secondFormGroup.get('stateCtrl')?.value;
              const paymentMethod = this.thirdFormGroup.get('selectPaymentCtrl')?.value;
    
              console.log('Full Name:', fullName);
              console.log('Phone Number:', phoneNumber);
              console.log('Country/Region:', country);
              console.log('Pincode:', pincode);
              console.log('Flat:', flat);
              console.log('Landmark:', landmark);
              console.log('State:', state);
              console.log('payment method', paymentMethod);
    
              this.snackBar.open('Your order has been placed successfully', 'Close',
                {
                  duration: 11000, // Duration in milliseconds
                  verticalPosition:'top'
                });
                this.userId = sessionStorage.getItem('userId');
      this.cardHolderName = sessionStorage.getItem('cardHolderName');
      this.cardCvv = sessionStorage.getItem('cardCvv');
      this.expiryDate = sessionStorage.getItem('expiryDate');
      this.cardNumber = sessionStorage.getItem('cardNumber');
      this.totalPrice = sessionStorage.getItem('totalPrice');
      var totalPrice1=parseInt(this.totalPrice);
      console.log(totalPrice1);
      this.payment = new Payment(0, this.userId, '', this.orderData.paymentMethod.toString(), totalPrice1, this.cardHolderName, this.cardNumber, this.expiryDate, this.cardCvv);
      console.log("Created payment object");
      console.log(this.payment);
      this.paymentService.savePayment(this.payment).subscribe(
        Data => {
          console.log("Saved Payment Details");
          console.log(this.payment);
          alert("Payment Done Successfully");
          this.productService.updateProductQuantity(product.productId,product.selectedQuantity,this.productInfo).subscribe(
            (Data : any)=> console.log("Quantity updated")
          )
          sessionStorage.removeItem('cardNumber');
          sessionStorage.removeItem('cardHolderName');
          sessionStorage.removeItem('cardCvv');
          sessionStorage.removeItem('expiryDate');
          sessionStorage.removeItem('cardStatus');
        }
      );
    
              this.router.navigate(['index']); // Navigate after saving order data
            },
            error: (error) => {
              console.error('Error saving order:', error);
            }
          });
        } else {
          this.openCardPaymentDialog(); // Open card payment dialog if payment method is not cash on delivery
        }
        
    
      }
      return
    }
    console.log("Outside Iffffffffffff")

    this.orderData.userId = this.userId;
    this.orderData.productId = this.productId;
    this.orderData.orderQuantity = this.orderQuantity;
    console.log("Order Quantityyyyyyyyyyyyyyyyyyy for buy now"+this.orderQuantity)
    this.orderData.productName = this.productName;

    this.orderData.productPrice = this.product.productPrice*this.orderQuantity;
    sessionStorage.setItem("pprice", this.orderData.productPrice.toString());

    // this.orderData.paymentMethod = this.selectedPaymentMethod;
    this.orderData.fullName = this.firstFormGroup.get('fullNameCtrl')?.value;
    this.orderData.phoneNumber = this.firstFormGroup.get('phoneNumberCtrl')?.value;
    this.orderData.country = this.secondFormGroup.get('countryCtrl')?.value;
    this.orderData.pincode = this.secondFormGroup.get('pincodeCtrl')?.value;
    this.orderData.flat = this.secondFormGroup.get('flatCtrl')?.value;
    this.orderData.landmark = this.secondFormGroup.get('landmarkCtrl')?.value;
    this.orderData.state = this.secondFormGroup.get('stateCtrl')?.value;

    this.orderData.paymentMethod = this.thirdFormGroup.get('selectPaymentCtrl')?.value;
    sessionStorage.setItem("pmethod", this.orderData.paymentMethod.toString());

    console.log(orderData);
    this.cardStatus = sessionStorage.getItem('cardStatus');
    if (this.cardStatus === "Success" || this.orderData.paymentMethod === 'Cash On Delivery') {
      this.orderService.saveOrderDetails(this.orderData).subscribe({
        next: () => {
          const fullName = this.firstFormGroup.get('fullNameCtrl')?.value;
          const phoneNumber = this.firstFormGroup.get('phoneNumberCtrl')?.value;
          const country = this.secondFormGroup.get('countryCtrl')?.value;
          const pincode = this.secondFormGroup.get('pincodeCtrl')?.value;
          const flat = this.secondFormGroup.get('flatCtrl')?.value;
          const landmark = this.secondFormGroup.get('landmarkCtrl')?.value;
          const state = this.secondFormGroup.get('stateCtrl')?.value;
          const paymentMethod = this.thirdFormGroup.get('selectPaymentCtrl')?.value;

          console.log('Full Name:', fullName);
          console.log('Phone Number:', phoneNumber);
          console.log('Country/Region:', country);
          console.log('Pincode:', pincode);
          console.log('Flat:', flat);
          console.log('Landmark:', landmark);
          console.log('State:', state);
          console.log('payment method', paymentMethod);

          this.snackBar.open('Your order has been placed successfully', 'Close',
            {
              duration: 11000, // Duration in milliseconds
              verticalPosition:'top'
            });
            this.userId = sessionStorage.getItem('userId');
      this.cardHolderName = sessionStorage.getItem('cardHolderName');
      this.cardCvv = sessionStorage.getItem('cardCvv');
      this.expiryDate = sessionStorage.getItem('expiryDate');
      this.cardNumber = sessionStorage.getItem('cardNumber');
      this.totalPrice = sessionStorage.getItem('totalPrice');
      var totalPrice1=parseInt(this.totalPrice);
      console.log(totalPrice1);
      this.payment = new Payment(0, this.userId, '', this.orderData.paymentMethod.toString(), totalPrice1, this.cardHolderName, this.cardNumber, this.expiryDate, this.cardCvv);
      
      console.log("Created payment object");
      console.log(this.payment);
      this.paymentService.savePayment(this.payment).subscribe(
        Data => {
          console.log("Saved Payment Details");
          console.log(this.payment);
          alert("Payment Done Successfully");
          this.productService.updateProductQuantity(this.productId,this.orderQuantity,this.productInfo).subscribe(
            (Data : any)=> console.log("Quantity updated")
          )
          sessionStorage.removeItem('cardNumber');
          sessionStorage.removeItem('cardHolderName');
          sessionStorage.removeItem('cardCvv');
          sessionStorage.removeItem('expiryDate');
          sessionStorage.removeItem('cardStatus');
        }
      );

          this.router.navigate(['index']); // Navigate after saving order data
        },
        error: (error) => {
          console.error('Error saving order:', error);
        }
      });
    } else {
      this.openCardPaymentDialog(); // Open card payment dialog if payment method is not cash on delivery
    }
    
}

openCardPaymentDialog(): void {
    
  const dialogRef = this.dialog.open(CardPaymentDialogComponent, {

    width: '400px' // Set the width of the dialog as needed
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
}