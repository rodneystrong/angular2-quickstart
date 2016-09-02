import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TestComponent} from './app.component-test';

@NgModule ({
  imports: [BrowserModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent, TestComponent]
})

export class AppModule{}
