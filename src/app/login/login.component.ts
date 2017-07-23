import { HttpService } from '../../services/HttpService';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  gender: string;
  constructor(private _http: HttpService) {
  }

  getData() {
    this._http.getData('/posts')
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
    console.table('Form details ', f.value);
  }


  changeFunc() {
    console.log('Radio Button ', this.gender);
  }
}
