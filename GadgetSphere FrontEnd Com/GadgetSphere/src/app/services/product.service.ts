import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductsInformation } from '../component/showproducts/showproducts.component';
import { Product } from '../component/admin/productlist/productlist.component';
import { OrderData } from '../component/order/order';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productName! : string;
  setProductName(productName: string) {
    this.productName = productName;
  }
  
  getProductName() {
    return this.productName;
  }

  constructor(private http:HttpClient) { }//prdefined  class
  baseURL="http://localhost:8089"

  //get all products
getAllProducts() {
  return this.http.get<Product[]>(`${this.baseURL}/product/show`)
}

//add products
saveProduct(findAll:Product)//argument
{
 console.log("Inside saveproduct")
 return this.http.post<Product>(`${this.baseURL}/product/add`,findAll)//this insatance variable
}                     //making the result generic
//update product
updateProductById(productId:Number,categories:Product){
 return this.http.put<Product>(`${this.baseURL}/product/update/${productId}`,categories)
}

//get product by id
getbyid(productId:Number){
 console.log(productId)
 return this.http.get<ProductsInformation>(`${this.baseURL}/product/${productId}`)
}

deletebyid(productId:number){
 return this.http.delete<Product[]>(`${this.baseURL}/product/delete/${productId}`)
}


//getting products
getproducts(){
 return this.http.get<ProductsInformation[]>(`${this.baseURL}/product/show`)

}

//get product by id
getproductbyid(productId:number){
  return this.http.get<ProductsInformation>(`${this.baseURL}/product/${productId}`)
  }

  

  //get product by name
  getProductByName(productName:any){
    return this.http.get<Product[]>(`${this.baseURL}/product/getProductByName/${productName}`)

    }

    //"/updateQuantity/product/{productId}/quantity/{quantity}"
  updateProductQuantity(productId:any , productQuantity:any, productInfo:Product){
    return this.http.put<Product>(`${this.baseURL}/product/updateQuantity/product/${productId}/quantity/${productQuantity}`,productInfo) 
  }

}
