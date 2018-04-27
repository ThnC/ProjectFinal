import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { error } from 'util';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    private headers: HttpHeaders;

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.json()['error'] || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }


    getallusers() {
        return this.http.get('http://5abc6cc0fd24f60014af81e7.mockapi.io/user')
            .map(response => {
                return response;
            }).catch(error => this.handleError(error));
    }

    getcurrentuser(iduser) {
        return this.http.get('http://5abc6cc0fd24f60014af81e7.mockapi.io/user/' + iduser)
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }
}
