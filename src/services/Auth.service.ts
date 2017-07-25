import { SessionStorage } from './session.storage';
import { Injectable } from '@angular/core';

export class AuthService extends SessionStorage {

    constructor() { super(); }

    public getAuth() {

    }
}
