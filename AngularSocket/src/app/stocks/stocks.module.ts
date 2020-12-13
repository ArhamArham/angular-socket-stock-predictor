import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LiveStocksComponent} from './live-stocks/live-stocks.component';
import {StocksService} from "./services/stocks.service";


@NgModule({
  declarations: [LiveStocksComponent],
  imports: [
    CommonModule
  ],
  providers: [StocksService],
  exports:[LiveStocksComponent]
})
export class StocksModule {
}
