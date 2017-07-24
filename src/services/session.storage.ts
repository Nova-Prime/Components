import { Injectable } from '@angular/core';

export class SessionStorage {
    public defaultValue = "";

    constructor() { }

    public store(key: string, val: string) {
        sessionStorage.setItem(key, val);
    }

    public retrive(key: string) {
        return sessionStorage.getItem(key) || this.defaultValue;
    }

    public clearSession() {
        sessionStorage.clear();
    }
}