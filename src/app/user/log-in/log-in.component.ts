import { Component, OnInit } from '@angular/core';
import { LoginDetailService } from 'src/app/shared/login-detail.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: []
})
export class LogInComponent implements OnInit {

  constructor(public services: LoginDetailService ) { }

  ngOnInit(): void {
  }
  
}
