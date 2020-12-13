import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StocksModule} from "./stocks/stocks.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
