import { Injectable } from "@angular/core";
import { FrantzApiService } from "../common/services/frantz-api.service";
import { Subject } from "rxjs/Subject";
import { BolResponse } from "../common/models";
import { FrantzApi } from "../common/";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BolsService {
  private bolsApiService: FrantzApi;
  bolsSource = new Subject<BolResponse>();
  bolsSourceObservable$ = this.bolsSource.asObservable()

  constructor(private http: HttpClient) {
    this.bolsApiService = new FrantzApiService(http)
  }

  getBols(): Observable<BolResponse> {
    return this.bolsApiService.bols()
  }

  getMockBols(): Observable<BolResponse> {
    return this.bolsApiService.mockBols()
  }
}