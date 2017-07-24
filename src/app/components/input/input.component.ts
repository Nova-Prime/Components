import { ValueAccessor } from '../valueAccessor';
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
  @Input() id: String;
  @Input() type: String;
  @Input() lname: String;
  @Input() name: String;
  @Input() hint: String = '';
}
