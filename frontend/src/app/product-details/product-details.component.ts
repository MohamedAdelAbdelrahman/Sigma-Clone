import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

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
    public productService: ProductsService
  ) {
    this.ID = myActivate.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.productService.GetProductById(this.ID).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
