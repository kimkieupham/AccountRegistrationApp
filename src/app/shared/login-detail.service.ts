import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetail } from './login-detail.model';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {

  constructor(private http: HttpClient) { }
  loginData: LoginDetail = new LoginDetail();

}
