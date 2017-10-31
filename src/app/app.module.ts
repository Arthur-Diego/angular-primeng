import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { TabViewModule} from 'primeng/primeng';

import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/components/inputtext/inputtext';

import {ButtonModule} from 'primeng/components/button/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
