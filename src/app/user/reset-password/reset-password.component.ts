import { Component, OnInit } from '@angular/core';
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

  constructor(public service: PasswordDetailService) { }

  ngOnInit(): void {
  }

}
