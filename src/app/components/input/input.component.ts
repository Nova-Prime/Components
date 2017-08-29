import { ValueAccessor } from '../valueAccessor';
import { Component, forwardRef, Input } from '@angular/core';
import { Form, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor, NgModel, NgModelGroup } from '@angular/forms/src/directives';

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
export class InputComponent extends ValueAccessor {
  _readonly = false;
  _disabled = false;
  _isFocus = false;
  _type = 'text';

  @Input() name: string;
  @Input() lname: string;

  @Input() hint = '';
  @Input() min: number | string = null;
  @Input() max: number | string = null;
  @Input() step: number | string = null;
  @Input() autocomplete = '';
  @Input() autocorrect = '';

  @Input()
  get readonly() {
    return this._readonly;
  }
  set readonly(val: boolean) {
    this._readonly = val;
  }


  @Input()
  get type() {
    return this._type;
  }
  set type(val: any) {
    this._type = val;
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(val: boolean) {
    this._disabled = val;
  }

  onInput(ev: any) {
    this.value = ev.target.value;
  }

}
