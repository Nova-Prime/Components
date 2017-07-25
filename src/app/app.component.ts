import { DOCUMENT } from '@angular/platform-browser';
import { Component, Inject, OnInit } from '@angular/core';
import { env } from './../config/config';
import { GlobalConfiguration } from './../config/config';


@Component({
  selector: 'app-root',
  template: `
    <button (click)="loadTheme('demo')" class="btn btn-primary">Demo theme </button>
    <button (click)="loadTheme('demo2')" class="btn btn-primary">Demo2 theme </button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public config: GlobalConfiguration, @Inject(DOCUMENT) private document) {

  }

  public ngOnInit(): void {
    console.log(env);
    console.log(this.config.env.Url);
  }

  public loadTheme(v: string) {
    this.document.getElementById('theme').setAttribute('href', `./assets/${v}.css`);
  }
}
