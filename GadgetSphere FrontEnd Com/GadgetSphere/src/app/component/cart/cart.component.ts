import { Component, OnInit } from '@angular/core';
import { ProductsInformation } from '../showproducts/showproducts.component';
import { Product } from '../admin/productlist/productlist.component';
import { CartService } from '../../services/cart.service';
import {  Router } from '@angular/router';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit {

  productId: any;
  // productInfo!:ProductsInformation;
  productsInfo:Product[]=[];
  userId:any;
  quantity: any =0;
  //user!: User;
  cartList:Cart[]=[];
  cart: any;
  cartId!:number;
  // userdetail! : UserProfile;

  showpay: boolean = true;
  hidebuy: boolean = false;
  d!:boolean;

  selectedProducts: Cart[] = [];


  constructor(private cartService:CartService,
    private productService:ProductService,
    private router:Router){}

    ngOnInit(): void {
       this.userId=sessionStorage.getItem('userId');
      console.log("1122223321"+this.userId);
        this.cartService.findCartByUserId(this.userId).subscribe(
          Response=> {this.cartList=Response;
          console.log(this.cartList);
    })
        this.cartService.getCartById(this.cartId).subscribe(
          Response=>{
            this.cart=Response
          } )

          this.productService.getAllProducts().subscribe(
            Response=>{
              this.productsInfo=Response
            })
 }

 gettotalprice(): number {
  let totalPrice: number = 0;
  this.cartList.forEach((product: any) => {
    if (product.productQuantity > 0)
      totalPrice += Number(product.productPrice) * product.selectedQuantity;
  });
  sessionStorage.setItem('totalPrice',totalPrice.toString())
  return totalPrice;
}


onchangeqty(id: number, event: any) {  //this for dont raise the qtn in cart all  product
  this.cart.forEach((prod:any) => {
    if (prod.productId == id) {
      prod.selectedQuantity = Number(event.target.value)
    }
    console.log(this.cart)
  });
}

deletecart(cartId: any) {
  this.d = confirm("CONFIRM TO REMOVE")
  if (this.d == true) {
    let i = 0; //index value

    this.cartService.deleteCartById(cartId).subscribe(
      Response => {
        console.log(Response)
      }
    )
  }}


  Buy(totalPrice: number) {
    console.log(this.quantity);
    
    sessionStorage.setItem('multiProduct',"true");
    this.router.navigate(['order']);
    // console.log("product name" + this.productName);
  }
}

export class UserProfile {

  constructor(
    
    public firstName: string,
    public lastName: string,
    public emailId: string,
    public password: string,
    public mobileNo: number) { }

}


export class Cart {
  constructor(
    public cartId: number,
    public userId: any,
    public productId: number,
    public imageLink: string,
    public productName: string,
    public productBrand: string,
    public productQuantity: number,
    public selectedQuantity: number,
    public productPrice: number

  ) { }
}