import { Injectable } from '@angular/core';
import { AccountDetail } from './account-detail.model';
import { HttpClient } from "@angular/common/http";
import { LoginDetail } from './login-detail.model';


@Injectable({
  providedIn: 'root'
})
export class AccountDetailService {

  constructor(private http: HttpClient) { }
  formData: AccountDetail = new AccountDetail();
  //loginData: LoginDetail = new LoginDetail();
  list: AccountDetail[];
  readonly baseURL = 'http://localhost:55570/api/AccountDetails';

  postAccountDetail(){
    return this.http.post(this.baseURL, this.formData);
  }
}
