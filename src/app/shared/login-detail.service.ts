import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetail } from './login-detail.model';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {

  constructor(private http: HttpClient) { }
  loginData: LoginDetail = new LoginDetail();
  readonly baseURL = 'http://localhost:55570/api/AccountDetails';

   
  login() {
    return this.http.post(this.baseURL + '/login',this.loginData);
  }
}
