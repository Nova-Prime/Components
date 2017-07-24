
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
  constructor() {
  }

  getData() {

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


  changeFunc() {
    console.log('Radio Button ', this.gender);
  }
}
