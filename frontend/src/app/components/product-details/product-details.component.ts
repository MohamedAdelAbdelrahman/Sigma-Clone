import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  ID = 0;
  product: any;

  constructor(
    myActivate: ActivatedRoute,
    public productService: ProductsService,
    public cartService: CartService
  ) {
    this.ID = myActivate.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.productService.GetProductById(this.ID).subscribe({
      next: (data) => {
        this.product = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  AddToCart(id: any) {
    alert('added');
    this.cartService.AddToCart(id).subscribe({
      next(value) {
        console.log('added to cart item' + value);
      },

      error(err) {
        console.log(err);
        alert(err);
      },
    });
  }
}
