import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public accountService: AccountService, private router: Router) {}

  userFromDB: any;
  userLoggedIn: any;

  LoginForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z]\w{7,14}$/),
    ]),
    email: new FormControl('', [
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      Validators.required,
    ]),
  });

  get emailValid() {
    return this.LoginForm.controls['email'].valid;
  }
  get emailTouch() {
    return this.LoginForm.controls['email'].touched;
  }
  get passwordValid() {
    return this.LoginForm.controls['password'].valid;
  }
  get passwordTouch() {
    return this.LoginForm.controls['password'].touched;
  }
  check(email: any, password: any) {
    let user = { email, password };
    this.accountService.LoginUser(user).subscribe({
      next: (data) => {
        // console.log(data);
        this.userFromDB = data;
        if (this.userFromDB) {
          localStorage.setItem('user', email);

          this.router.navigate(['/']);
          location.reload();
        }
      },

      error(err) {
        alert('user not found, please register');
        console.log(err);
      },
    });
  }
}
