import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn btn-primary" [type]="type">{{name}}
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string;
  @Input() type = 'button';

  x() {

  }
}
