import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginDetailService } from 'src/app/shared/login-detail.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: []
})
export class LogInComponent implements OnInit {

  constructor(public services: LoginDetailService,
    private router: Router,
    public toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {//using for the log in form
    this.services.login(form.value).subscribe(
      (res:any) => {
        localStorage.setItem('token',res.token);
        console.log("Top");//debugging
        this.toastr.success('Account Login Successful');
        this.router.navigateByUrl('/header');
      },
      err =>{
        if(err.status == 400)//which mean that the either password or username is incorrect and it is the bad request
        this.toastr.error('Incorrect username or password');
        else 
        console.log("go here");//debugging
        console.log(err);
      }
    );
  }
  
}
