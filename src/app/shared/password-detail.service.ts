import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PasswordDetail } from './password-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordDetailService {

  constructor(private http : HttpClient) { }
  passwordData: PasswordDetail = new PasswordDetail();
  PList: PasswordDetail[];
  readonly baseURL = 'http://localhost:55570/api/ApplicationUser/resetPassword';

  putPasswordDetail() {
    return this.http.put(`${this.baseURL}`,this.passwordData);
  }

}
