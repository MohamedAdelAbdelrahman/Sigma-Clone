import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers-of-pages',
  templateUrl: './headers-of-pages.component.html',
  styleUrls: ['./headers-of-pages.component.css'],
})
export class HeadersOfPagesComponent implements OnInit {
  loggedUser: any;

  ngOnInit() {
    this.loggedUser = this.readLocalStorageValue('user');
  }

  readLocalStorageValue(key: any): any {
    return localStorage.getItem(key);
  }

  navbarfixed: boolean = false;
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
}
