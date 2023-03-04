import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  private base_url = 'http://localhost:3000/api/v1/users/cart/';

  AddToCart(itemID: any) {
    return this.http.post(this.base_url, itemID);
  }

  GetAllCartItems() {
    return this.http.get(this.base_url);
  }

  UpdateCartItem(id: any, item: any) {
    return this.http.put(this.base_url + id, item);
  }

  DeleteCartItem(id: any) {
    return this.http.delete(this.base_url + id);
  }
}
