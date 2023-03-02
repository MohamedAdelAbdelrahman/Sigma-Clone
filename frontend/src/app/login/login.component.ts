import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    LoginForm= new FormGroup({
    password: new FormControl("",[Validators.required,Validators.pattern(/^[A-Za-z]\w{7,14}$/)]),
    email : new FormControl("",[Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),Validators.required])
  });

  get emailValid(){
    return this.LoginForm.controls['email'].valid;
  }
  get emailTouch(){
    return this.LoginForm.controls['email'].touched;
  }
  get usernameValid(){
    return this.LoginForm.controls['username'].valid;
  }
  get usernameTouch(){
    return this.LoginForm.controls['username'].touched;
  }
  get passwordValid(){
    return this.LoginForm.controls['password'].valid;
  }  
  get passwordTouch(){
    return this.LoginForm.controls['password'].touched;
  }
check(){
  
}
}
