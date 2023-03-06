import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  constructor(private http: HttpClient) {}
  // private base_url = 'http://localhost:3000/api/v1/users/';
  ngOnInit(): void {}

  AddToCart(productId: any) {
    let userEmail = localStorage.getItem('userEmail');
    let base_url = `http://localhost:3000/api/v1/users/${userEmail}/cart/`;
    return this.http.post(base_url, { productId });
  }

  // GetAllCartItems() {
  //   let userEmail = localStorage.getItem('userEmail');
  //   let base_url = `http://localhost:3000/api/v1/users/${userEmail}/cart/`;
  //   return this.http.get(base_url);
  // }

  // UpdateCartItem(id: any, item: any) {
  //   return this.http.put(this.base_url + id, item);
  // }

  DeleteCartItem(productId: any) {
    let userEmail = localStorage.getItem('userEmail');
    let base_url = `http://localhost:3000/api/v1/users/${userEmail}/cart/${productId}`;
    return this.http.delete(base_url);
  }

  getCartProducts(email: any) {
    let base_url = `http://localhost:3000/api/v1/users/${email}/cart/`;
    return this.http.get(base_url);
  }
}
