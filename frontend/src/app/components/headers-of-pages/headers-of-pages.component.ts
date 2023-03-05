import { Component, HostListener, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-headers-of-pages',
  templateUrl: './headers-of-pages.component.html',
  styleUrls: ['./headers-of-pages.component.css'],
})
export class HeadersOfPagesComponent implements OnInit {
  constructor(public accountService: AccountService) {}
  loggedUser: any;

  ngOnInit() {
    this.loggedUser = this.readLocalStorageValue('userEmail');
  }

  Logout() {
    this.accountService.LogoutUser().subscribe({
      next(value) {
        localStorage.removeItem('userEmail');
        window.location.href = '/';
      },
    });
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
