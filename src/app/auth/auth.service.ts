import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated():boolean {
    console.log("Authenticated")
    const token:any = localStorage.getItem('token');//this is use to check if the token is expired or not, which mean if there is the real user of this account 
    return !this.jwtHelper.isTokenExpired(token);
  }
}

