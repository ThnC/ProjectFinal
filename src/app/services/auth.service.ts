import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    constructor(private http: Http, private router: Router) { }
    login(username: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.error(error)
            );
        // return this.http.post('https://monster-3c805.firebaseio.com', { username: username, password: password })
        //     .map((response: Response) => {
        //         let user = response.json();
        //         if (user && user.token) {
        //             localStorage.setItem('user', JSON.stringify(user));
        //         }
        //         return user;
        //     });
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}