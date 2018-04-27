import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-cmp',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
