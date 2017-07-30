import { Logger } from '../components/Logger';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent {
  gender: string;
  constructor(private log: Logger) {
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
