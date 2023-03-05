import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userLoggedIn: any;

  title = 'frontend';
  constructor(public accountService: AccountService, private router: Router) {}
  ngOnInit(): void {
    this.accountService.showLoggedUser().subscribe({
      next: (value) => {
        this.userLoggedIn = value;
        console.log('logged in user ' + value);
      },

      error(err) {
        console.log(err);
      },
    });
  }
}
