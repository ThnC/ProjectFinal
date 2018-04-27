import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    iduser: any = [];
    userinfo: any = {};
    fname;
    allusers;


    test: Date = new Date();

    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    constructor(
        private router: Router,
        private userService: UserService,
        private element: ElementRef,
        private toastr: ToastrService,
        private authService: AuthService,
    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.userService.getallusers().subscribe(result => this.allusers = result);
    }


    ngOnInit(): void {
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 1000);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible === false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 1000);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }


    OnSubmit(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.login(email, password);
        // var dem = 0;
        // var name = '';
        // for (let i = 0; i < this.allusers.length; i++) {

        //     if (this.allusers[i].username === UserName && this.allusers[i].password === Password) {
        //         name = this.allusers[i].fullname;
        //         dem = 1;
        //     }
        // }
        // if (dem === 1) {
        //     const getuser = this.allusers.filter(function (item) {
        //         return item.username === UserName;
        //     });

        //     console.log(getuser);
        //     localStorage.setItem('user', JSON.stringify(getuser));
        //     this.toastr.success('Đăng nhập thành công!! Xin chào ' + name, 'Zero 9',
        //         {
        //             progressBar: true,
        //             positionClass: 'toast-bottom-right',
        //             timeOut: 10000
        //         });

        //     setTimeout(() => {
        //         this.router.navigate(['/main/dashboard']);
        //     }, 1000);
        //     return;
        // } else {
        //     this.toastr.success('Đăng nhập thất bại!! Xin nhập đúng tài khoản và mật khẩu');
        // }
    }

}
