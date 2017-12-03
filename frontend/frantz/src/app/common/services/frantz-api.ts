import { Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import {
    BolResponse, Bol
} from '../models';
import { HttpClient } from '@angular/common/http/src/client';

export interface FrantzApi {

  http: HttpClient;

  bols(): Observable<BolResponse>;

  mockBols(): Observable<BolResponse>;

  bol(id: number): Observable<Bol>;
}