import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}
  cartItems: any;
  ngOnInit(): void {
    this.cartService.GetAllCartItems().subscribe({
      next: (data) => {
        console.log('cart' + data);
        this.cartItems = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
