import { Component, OnInit } from '@angular/core';
import { env } from './../config/config';
import { GlobalConfiguration } from './../config/config';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public config: GlobalConfiguration) {

  }

  public ngOnInit(): void {
    console.log(env);
    console.error(this.config.env.Url);
  }
}
