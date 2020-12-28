import { Component, OnInit } from '@angular/core';
import { AccountDetailService } from 'src/app/shared/account-detail.service';
import { AccountDetail } from 'src/app/shared/account-detail.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {
/**With the public service inside the constructor, we will  */
  constructor(public service: AccountDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";//use to check for the valid email
  onSubmit(form: NgForm){
    this.service.postAccountDetail().subscribe(
      res => {
        this.toastr.success('Account Registration Successful');
      },
      err => {console.log(err)}
    )
  }
 
}
