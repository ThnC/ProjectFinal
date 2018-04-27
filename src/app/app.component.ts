import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyALa83VwiZB9AxUwQWzqm8MCUsB_ivqF1Y',
      authDomain: 'monster-3c805.firebaseapp.com',
      databaseURL: 'https://monster-3c805.firebaseio.com',
      projectId: 'monster-3c805',
    });
    $.material.init();
  }
}
