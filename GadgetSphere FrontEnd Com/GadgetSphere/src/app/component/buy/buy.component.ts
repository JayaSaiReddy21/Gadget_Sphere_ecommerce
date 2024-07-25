import { Component, OnInit } from '@angular/core';
import { ProductsInformation } from '../showproducts/showproducts.component';
import { HardcoreAuthenticationService } from '../../services/hardcore-authentication.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Cart } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit {
  product!: ProductsInformation;
  productId!: number;
  userId: any;
  productName! : string;
  quantity: number = 0;
  productPrice!: number;
  cart = new Cart(0, 0, 0, '', '', '', 0, 0, 0)

  move! : number;
  constructor(public hardcodeAuthenticationService: HardcoreAuthenticationService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private productService : ProductService,
    private cartService : CartService
    ) { }
    isUserLogin : boolean = false;

  ngOnInit(): void {
     this.productId = this.activatedRoute.snapshot.params['productId'];
     this.userId=sessionStorage.getItem('userId');
    console.log(this.userId);
    if(this.userId > 0)
    {
      this.isUserLogin=true;
    }
      // this.move = this.userId;

     this.cart.userId = this.userId;// cart purpose

    this.productService.getproductbyid(this.productId).subscribe(Response => {
      this.product = Response

      console.log(Response)
    })
    this.productService.getproductbyid(this.productId).subscribe(
      Response => {
        console.log("inside cart" + this.productId)
        console.log(Response)
        this.cart.productId = Response.productId;
        console.log(this.cart.productId)
        this.cart.imageLink = Response.link;
        this.cart.productName = Response.productName;
        this.cart.productPrice = Response.productPrice;
        this.cart.productQuantity = Response.productQuantity;
        this.cart.selectedQuantity = 1
      }
    )
  }

 
  buyNowFunction(productId: number, price: number, quan: number, productName: string) {
    console.log("Quantityyyyyyyyyyyyyyyyyyyyyyyyyyy"+this.quantity);
    if (!this.isUserLogin) {
      this.router.navigate(['userlogin']);
      return;
    }
    
    if (quan === 0) {
      alert("OUT OF STOCK! PLEASE CHECK AFTER 24 hours!!");
      return; // Stop execution here if quantity is zero
    }
  
    if (this.quantity <= 0 || this.quantity > quan) {
      alert("SELECTED QUANTITY IS LESS THAN ZERO OR BEYOND THE LIMIT");
      return; // Stop execution here if quantity is not valid
    }
  
    // Proceed only if the quantity is valid
    this.productPrice = this.quantity * price;
    console.log(this.productPrice);
    sessionStorage.setItem('byProduct',"true")
    sessionStorage.setItem('multiProduct',"false")
    this.router.navigate(['order', productId, this.quantity]);
    console.log("product name" + this.productName);
  }

      cartsave(productId: number, price: number, quan: any) {
   
      if (this.quantity === 0) {
      alert("PLEASE SELECT THE QUANTITY")

    } else {
      console.log("Inside Cart Saveeeeeeeeeeeeee"+this.quantity)
      console.log(this.cart)
      this.cart.selectedQuantity=this.quantity;
      this.cart.productPrice=this.cart.productPrice*this.quantity;
      this.cartService.savecart(this.cart).subscribe(
        Response => {
          console.log("inside save" + this.cart)
          this.cart = Response
          console.log(Response)
        }
      )
      alert("PRODUCT ADDED TO THE CART")
    }
  }
}  