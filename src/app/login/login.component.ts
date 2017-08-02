import { LocalPerson, RootObject } from './intf';
import { Http } from '@angular/http';
import { Logger } from '../components/Logger';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';
import * as Ajv from 'ajv';

// import * as data from './sample.json';


declare var require: any;
const x = require('./sample.json');
const ajv = new Ajv({ $data: true });

const schema = {
  'properties': {
    'smaller': {
      'type': 'number',
      'maximum': { '$data': '1/larger' }
    },
    'larger': { 'type': 'number' }
  }
};

const validData = {
  smaller: 5,
  larger: '7'
};



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent {
  gender: string;
  obj: LocalPerson;

  constructor(private log: Logger, private http: Http) {
    console.log(x);
  }

  getData() {

  }

  oneButton() {
    alert('One clicked');
    this.log.log(ajv.validate(schema, validData));

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
