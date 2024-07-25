import { Injectable } from '@angular/core';
import { Payment } from '../payment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  baseURL="http://localhost:8089/payment"


  savePayment(payment:Payment)//argument
{
 console.log("payment details"+payment)
 return this.http.post<Payment>(`${this.baseURL}/save`,payment)//this insatance variable
}  
}
