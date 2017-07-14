import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    getData(url) {
        return this.http.get(url)
            .map((response: Response) => response.json());
    }
}
