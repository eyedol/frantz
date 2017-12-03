import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BolComponent } from './bol/bol.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BolsService } from './bol/bols.service';
import {  HttpClientModule } from '@angular/common/http';
import { BarcodeComponent } from './barcode/barcode.component';


@NgModule({
  declarations: [
    AppComponent,
    BolComponent,
    NavigationComponent,
    BarcodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [BolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
