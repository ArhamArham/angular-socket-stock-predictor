import {Component, OnInit} from '@angular/core';
import {StocksService} from "../services/stocks.service";

@Component({
  selector: 'app-live-stocks',
  templateUrl: './live-stocks.component.html',
  styleUrls: ['./live-stocks.component.css']
})
export class LiveStocksComponent implements OnInit {

  constructor(private _stockService: StocksService) {
  }

  title: string = "Live stocks of Apple, Google And Microsoft!"
  stockValues: any[] = [];

  ngOnInit(): void {
    this._stockService.getLiveStockValues().subscribe(
      stocks => this.stockValues = stocks,
      err => console.log(err)
    )
  }

}
