import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public productService: ProductsService) {}

  products: any;
  ngOnInit(): void {
    console.log(this.productService.GetAllProducts());

    this.productService.GetAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
        
      },
      error: (err) => {
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
