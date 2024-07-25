import { Injectable } from '@angular/core';
import { Cart } from '../component/cart/cart.component';
import { HttpClient } from '@angular/common/http';
import {User} from '../component/userregistration/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  
  constructor(private http:HttpClient) { }//prdefined  class
  baseURL="http://localhost:8089/cart"
  
  findCartByUserId(userId: any): Observable<Cart[]> {
    console.log(userId+" inside service");
    return this.http.get<Cart[]>(`${this.baseURL}/findCartByUserId/${userId}`)
  }
  
  savecart(cart: any) {
    console.log("Inside save sevice"+cart.selectedQuantity)
    console.log("Inside save sevice"+cart.productQuantity)
    return this.http.post<Cart>(`${this.baseURL}/add`,cart)
  }

  getCartById(cartId: any) {
    return this.http.get<Cart>(`${this.baseURL}/${cartId}`)
  }

  deleteCartById(cartId: any) {
    return this.http.delete<Cart>(`${this.baseURL}/delete/${cartId}`)
  }
  
  // noduplicateproduct(acctid: number, productid: number) {
  //   return this.http.post<Cart>(`${this.baseURL}/product/add`,acctid)
  // }

 
}
