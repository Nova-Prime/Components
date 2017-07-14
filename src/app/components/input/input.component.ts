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


  protected _value: any;
  protected onChange: (_: any) => void = noop;
  protected onTouched: () => void = noop;

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    if (value !== this._value) {
      this._value = value;
      this.onChange(value);
    }
  }

  writeValue(value: any) {
    if (value !== this._value) {
      this._value = value;
    }

  }
  registerOnChange(fn: any) {
    this.onChange = fn;

  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;

  }
  // public hasErrors(input: NgModel): boolean {
  //   return input.touched && this.errors != null;
  // }

}
