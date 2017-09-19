import { ValueAccessor } from '../valueAccessor';
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

export class RadioComponent extends ValueAccessor {
    @Input() v: string;
    @Input() name: string;
    
}
