import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  constructor(private http: HttpClient) {}
  private base_url = 'http://localhost:3000/api/v1/users/cart/';
  ngOnInit(): void {}
  AddToCart(itemID: any) {
    let userEmail = localStorage.getItem('userEmail');

    const reqBody = {
      productId: itemID,
    };

    return this.http.post(this.base_url + userEmail + '/add', reqBody);
  }

  GetAllCartItems() {
    return this.http.get(this.base_url);
  }

  UpdateCartItem(id: any, item: any) {
    return this.http.put(this.base_url + id, item);
  }

  DeleteCartItem(id: any) {
    let userEmail = localStorage.getItem('userEmail');

    const reqBody = {
      productId: id,
    };

    return this.http.post(this.base_url + userEmail, reqBody);
  }

  getCartProducts(email: any) {
    return this.http.get(this.base_url + email);
  }
}
