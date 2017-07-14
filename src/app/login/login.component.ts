import { HttpService } from '../../services/HttpService';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _http: HttpService) {
  }

  getData() {
    this._http.getData('https://jsonplaceholder.typicode.com/posts')
      .subscribe(res => {
        console.log(res);
      });
  }

  oneButton() {
    alert('One clicked');
  }
  twoButton() {
    alert('two clicked');
  }
  validate(f: NgForm) {
    console.log('Form details ', f.value);
  }

}
