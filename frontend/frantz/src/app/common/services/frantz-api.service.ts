import { URLSearchParams, RequestOptions } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BolResponse , Bol} from '../../common'
import { FrantzApi } from './frantz-api'
import { JsonConvert, OperationMode } from 'json2typescript';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

export class FrantzApiService implements FrantzApi {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  bols(): Observable<BolResponse> {
    return this.http.get<BolResponse>("http://localhost:8000/api/bol/")
    .pipe(
      tap(bol => this.log("")),
      catchError(this.handleError('mockBols', new BolResponse))
    )
  }
  mockBols(): Observable<BolResponse> {
    return this.http.get<BolResponse>("assets/mock-api-response/bols.json")
    .pipe(
      tap(bol => this.log("")),
      catchError(this.handleError('mockBols', new BolResponse))
    )
  }
  bol(id: number): Observable<Bol> {
    throw new Error("Method not implemented.");
  }

  private deserializeBol(response: any) {
    let jsonConvert: JsonConvert = new JsonConvert();
    jsonConvert.operationMode = OperationMode.LOGGING;
    let bolResponse: BolResponse
    try{
      console.log(response.json)
      bolResponse = jsonConvert.deserialize(response.json, BolResponse)
    }catch(e) {
      console.log(e)
    }
    return bolResponse
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
         // TODO: send the error to remote logging infrastructure
         console.error(error); // log to console instead
      
         // TODO: better job of transforming error for user consumption
        // this.log(`${operation} failed: ${error.message}`);
      
         // Let the app keep running by returning an empty result.
         return of(result as T);
       };
  }

  private log(message: string) {
    //this.messageService.add('HeroService: ' + message);
  }
}