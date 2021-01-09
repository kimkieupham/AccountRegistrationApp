import { Injectable } from '@angular/core';
import { PasswordDetail } from './password-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordDetailService {

  constructor() { }
  passwordData: PasswordDetail = new PasswordDetail();
}
