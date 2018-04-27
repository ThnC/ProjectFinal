import { Component, OnInit, ViewChild, AfterViewInit,EventEmitter, Input, Output } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import { NavbarComponent } from '../template/navbar/navbar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  constructor(public location: Location, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.runOnRouteChange();
  }
  isMaps(path) {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path == titlee) {
      return false;
    }
    else {
      return true;
    }
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
  onActivate(component) {
    console.log(component);
  }
}
