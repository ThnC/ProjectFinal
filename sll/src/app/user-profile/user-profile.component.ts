import { Component, OnInit, ElementRef } from '@angular/core';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: [`md-calendar {
    width: 300px;
}`]
})
export class UserProfileComponent implements OnInit {

  userinfo: any = {};
  constructor() { }

  ngOnInit() {
    this.userinfo = JSON.parse(localStorage.getItem('user'));
  }

}
