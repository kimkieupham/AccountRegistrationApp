import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,
  public auth:AuthService  ){}
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('token') != null){//mean there is a web token inside then 
        console.log("Hi");
        return true;
      }
      else{//otherwise we can redirect it to the user/login
        console.log("Bye");
        this.router.navigate(['/user/login']);

        return false;
      }
      
  }
  
}
    /*  
  if(!this.auth.isAuthenticated()){
        console.log("Hi");
        this.router.navigate(['/user/login']);
        return false;
      }
      else{
        console.log("Bye");
        return true;
      }
      
  */