import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessor implements ControlValueAccessor {

    protected change = Function;
    protected touched = Function;
    _value: any = '';

    constructor() { }

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
        this._value = obj;
    }

    public registerOnChange(fn: any): void {
        this.change = fn;
    }

    public registerOnTouched(fn: any): void {
        this.touched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {

    }
    onTouched() {
        this.touched(null);
    }

}
