import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountDetail } from 'src/app/shared/account-detail.model';
import { AccountDetailService } from 'src/app/shared/account-detail.service';
import { PasswordDetailService } from 'src/app/shared/password-detail.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: [
  ]
})
export class ResetPasswordComponent implements OnInit {

  constructor(public service: PasswordDetailService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
  }
 //need to create a method to get the value to the backend 
 onSubmit(form: NgForm) {
   this.service.putPasswordDetail().subscribe(
     res => {
       this.toastr.success("Update the password")
     },
     err => {console.log(err);}
   );
 }
}
