import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';
import { Component, forwardRef, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.html',
    styleUrls: ['./radio.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})

export class RadioComponent implements OnInit, ControlValueAccessor {


    @Input() v: string;

    protected change = Function;
    protected touched = Function;
    _value: any;

    constructor() { }
    ngOnInit() { }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        if (value !== this._value) {
            this._value = value;
            this.change(value);
        }
    }

    public writeValue(obj: any): void {
        if (obj !== this._value) {
            this._value = obj;
            this.change(obj);
        }
    }

    public registerOnChange(fn: any): void {
        this.change = fn;
    }

    public registerOnTouched(fn: any): void {
        this.touched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {

    }
}
