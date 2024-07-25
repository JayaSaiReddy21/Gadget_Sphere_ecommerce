import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bankserver } from '../component/card-payment-dialog/card-payment-dialog.component';
import { ProductsInformation } from '../component/showproducts/showproducts.component';

@Injectable({
  providedIn: 'root'
})
export class BankserverService {
 

  constructor(private http : HttpClient) { }

  findCardDetails(cardNumber: any, cardCvv: any, expiryDate: any, cardHolderName: any) {
    return this.http.get<Bankserver>(`http://localhost:8089/bankserver/findCardDetails/${cardNumber}/${cardCvv}/${expiryDate}/${cardHolderName}`)
  }

  // updatesetquantity( productQuantity:any,productId: any, productDetails:ProductsInformation) {
  //   return this.http.put<ProductsInformation>(`http://localhost:8290/updatequn/${productQuantity}/${productId}`,productDetails)
  // }

  
}
