import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(public accountService: AccountService, private router: Router) {}

  newUser: any;

  LoginForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z]\w{7,14}$/),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(14),
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
  get usernameValid() {
    return this.LoginForm.controls['username'].valid;
  }
  get usernameTouch() {
    return this.LoginForm.controls['username'].touched;
  }
  get passwordValid() {
    return this.LoginForm.controls['password'].valid;
  }
  get passwordTouch() {
    return this.LoginForm.controls['password'].touched;
  }
  check(email: any, name: any, password: any) {
    let user = { email, name, password };
    this.accountService.RegisterUser(user).subscribe({
      next: (value) => {
        console.log(value);
        this.newUser = value;
        if (this.newUser) {
          localStorage.setItem('user', name);
          this.router.navigate(['/']);
          location.reload();
        }
      },

      error(err) {
        alert('user already exist');
        console.log(err);
      },
    });
  }
}
