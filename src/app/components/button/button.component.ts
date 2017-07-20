import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn btn-primary" [type]="type">{{name}}</button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string;
  @Input() type = 'button';

  x() {

  }
}
 