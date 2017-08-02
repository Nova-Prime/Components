import { LocalPerson, RootObject } from './intf';
import { Http } from '@angular/http';
import { Logger } from '../components/Logger';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';
// import * as data from './sample.json';


declare var require: any;
const x = require('./sample.json');


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent {
  gender: string;
  obj: string;

  constructor(private log: Logger, private http: Http) {
    console.log(x);
  }

  getData() {

  }

  oneButton() {
    alert('One clicked');
  }
  twoButton() {
    alert('two clicked');
    this.log.error(`crazy world ${2 + 3}`);
  }
  validate(f: NgForm) {
    this.log.log('Form details ', f.value);
  }


  changeFunc() {
    console.log('Radio Button ', this.gender);
  }
}
