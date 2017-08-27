import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Logger } from '../components/Logger';

import { Component, EventEmitter, Injectable, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';
import * as Ajv from 'ajv';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

// import * as data from './sample.json';

@Injectable()
export class SharedService {
  cartData = new EventEmitter<any>();
}


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

interface Person {
  age: string;
  name: string;
}

interface RootObject {
  people: Person[];
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [SharedService]
})
export class LoginComponent {
  gender: string;
  public modalRef: BsModalRef;

  constructor(private log: Logger, private http: HttpClient, private modalService: BsModalService, private s: SharedService) {
    console.log(x);
  }



  getData() {
    this.http.get<RootObject>('./../../assets/sample.json')
      .subscribe(res => {
        console.log('Got Response', res.people);
      })
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
  public openModal() {
    this.modalService.onShow.subscribe((reason: string) => {
      console.log(`onShow event has been fired`);
    });
    this.s.cartData.subscribe((res: string) => {
      console.log('KOOKKO', res);
    });
    this.modalRef = this.modalService.show(ModalContentComponent);
    this.modalRef.content.title = 'Modal with component';
  }

}


@Component({
  selector: 'app-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
      <button (click)="HelloTrojan()">TrojanHorse</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  `,
  providers: [
    SharedService
  ]
})
export class ModalContentComponent {
  public title: string;
  public list: any[] = [];



  constructor(public bsModalRef: BsModalRef, private shared: SharedService) { }
  HelloTrojan() {
    console.log('Trojan');
    this.shared.cartData.emit('Joker');
  }
}
