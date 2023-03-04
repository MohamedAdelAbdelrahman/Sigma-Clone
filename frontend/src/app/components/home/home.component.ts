import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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

    // this.productService.GetCategories().subscribe({
    //   next: (value) => {
    //     this.categories = value;
    //     console.log('this is data' + value);
    //   },

    //   // error(err) {
    //   //   console.log(err);
    //   // },
    // });
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

  // category
  ClickLeft() {
    var container = document.getElementById('container');
    sideScroll(container, 'left', 25, 270, 10);
  }
  ClickRight() {
    var container = document.getElementById('container');
    sideScroll(container, 'right', 25, 270, 10);
  }
  // desktop

  ClickLeft1() {
    var container = document.getElementById('container1');
    sideScroll(container, 'left', 25, 270, 10);
  }
  ClickRight1() {
    var container = document.getElementById('container1');
    sideScroll(container, 'right', 25, 270, 10);
  }

  // notebook
  ClickLeft2() {
    var container = document.getElementById('container2');
    sideScroll(container, 'left', 25, 270, 10);
  }
  ClickRight2() {
    var container = document.getElementById('container2');
    sideScroll(container, 'right', 25, 270, 10);
  }

  // storage
  ClickLeft3() {
    var container = document.getElementById('container3');
    sideScroll(container, 'left', 25, 270, 10);
  }
  ClickRight3() {
    var container = document.getElementById('container3');
    sideScroll(container, 'right', 25, 270, 10);
  }
  // monitor
  ClickLeft4() {
    var container = document.getElementById('container4');
    sideScroll(container, 'left', 25, 270, 10);
  }
  ClickRight4() {
    var container = document.getElementById('container4');
    sideScroll(container, 'right', 25, 270, 10);
  }
}

function sideScroll(
  element: any,
  direction: any,
  speed: any,
  distance: any,
  step: any
) {
  var scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
//  function showSlides(n:any) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
