import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor, NgModel, NgModelGroup } from '@angular/forms/src/directives';
const noop = (_?: any) => { };
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() id: String;
  @Input() type: String;
  @Input() lname: String;
  @Input() name: String;
  @Input() hint: String = '';

  protected change = Function;
  protected touch = Function;
  _value: any;

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
    this.touch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
  }
}
