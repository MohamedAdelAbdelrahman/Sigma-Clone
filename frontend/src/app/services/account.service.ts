import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  private base_url = 'http://localhost:3000/api/v1/auth/';
  private user_base_url = 'http://localhost:3000/api/v1/users/showMe/';

  LoginUser(user: any) {
    return this.http.post(this.base_url + 'login', user);
  }
  RegisterUser(user: any) {
    return this.http.post(this.base_url + 'register', user);
  }
  LogoutUser() {
    return this.http.get(this.base_url + 'logout');
  }
  showLoggedUser() {
    return this.http.get(this.user_base_url);
  }
}
