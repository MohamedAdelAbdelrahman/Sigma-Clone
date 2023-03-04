import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private base_url = 'http://localhost:3000/api/v1/products/';

  // private category_base_ur = 'http://localhost:3000/api/v1/products?categories=notebook';

  GetAllProducts() {
    return this.http.get(this.base_url);
  }

  // GetCategories() {
  //   return this.http.get(this.category_base_ur);
  // }

  GetProductById(id: any) {
    return this.http.get(this.base_url + id);
  }
  UpdateProduct(id: any, product: any) {
    return this.http.put(this.base_url + id, product);
  }
}
