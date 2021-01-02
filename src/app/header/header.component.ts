import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetailService } from '../shared/login-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
    public services: LoginDetailService) { }

  ngOnInit(): void {
  }
//we need to add the function logout to navigate 
onLogout() {
  localStorage.removeItem('token');//this is use the 
  this.router.navigate(['/user/login']);//since the fullpatch is connect to the login the we can just navigate back to the login when the user want  to log out 
}
}
