import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) {}
  cartProducts: any;

  ngOnInit() {
    let userEmail = localStorage.getItem('userEmail');
    this.cartService.getCartProducts(userEmail).subscribe({
      next: (data) => {
        this.cartProducts = data;
      },
    });
  }

  removeItem(ID: any) {
    this.cartService.DeleteCartItem(ID).subscribe({
      next: () => {
        this.ngOnInit();
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
