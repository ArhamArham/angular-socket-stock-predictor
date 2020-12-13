import {Injectable} from '@angular/core';
import {Observable} from "rxjs"
import * as io from "socket.io-client"

@Injectable()
export class StocksService {
  private _socketUrl: string = "http://localhost:9090/live"
  private _socket;

  constructor() {
    // @ts-ignore

    this._socket = io(this._socketUrl)
  }

  getLiveStockValues(): Observable<any> {
    return Observable.create(observer => {
      this._socket.emit("joinStockRoom","stocks");
      this._socket.on("liveStocks", stocks => {
        observer.next(stocks)
      })
    })
  }
}
