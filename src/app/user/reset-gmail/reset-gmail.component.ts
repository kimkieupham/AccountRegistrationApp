import { Component, OnInit } from '@angular/core';
import { PasswordDetailService } from 'src/app/shared/password-detail.service';

@Component({
  selector: 'app-reset-gmail',
  templateUrl: './reset-gmail.component.html',
  styles: [
  ]
})
export class ResetGmailComponent implements OnInit {

  constructor(public service: PasswordDetailService) { }

  ngOnInit(): void {
  }

}
