import { Component,OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  products: any;
  categories: any;
  constructor(
    public productService: ProductsService,
    public cartService: CartService
  ) {}
  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
        // if (this.products.products[0].category == 'Desktop') {
        //   console.log('done');

        // }
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
  AddToCart(id: any) {
    this.cartService.AddToCart(id).subscribe({
      next(value) {
        console.log('added to cart item' + value);
      },

      error(err) {
        console.log(err);
      },
    });
  }
}
