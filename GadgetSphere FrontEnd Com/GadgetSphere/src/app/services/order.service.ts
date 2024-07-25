import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { OrderData } from '../component/order/order';

@Injectable({
  providedIn: 'root'
})



export class OrderService {
  constructor(private http:HttpClient) { }
  baseURL="http://localhost:8089/order"

  saveOrderDetails(orderData: any): Observable<any>{
    return this.http.post(`${this.baseURL}/add`,orderData);
  }

  findUserById(userId : any)
  {
    return this.http.get<OrderData>(`${this.baseURL}/findByUserId/${userId}`);
  }

  listOfSoldProduct() {
    return this.http.get<OrderData[]>(`${this.baseURL}/getAllSoldProduct`)
  }
  
  getSoldProductsByUserId(userId: number): Observable<any> {
    return this.http.get<OrderData[]>(`${this.baseURL}/getSoldProductsByUserId/${userId}`);
  }
}
