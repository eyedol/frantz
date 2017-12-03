import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router, ActivatedRoute }       from '@angular/router';
//import {Subscription}                   from 'rxjs/Subscription';
import { BolResponse, Bol }                  from '../common';
import { Subscription } from 'rxjs';
import { BolsService } from './bols.service';

@Component({
  selector: 'app-bol',
  templateUrl: './bol.component.html',
  styleUrls: ['./bol.component.scss']
})
export class BolComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  bolResponse: BolResponse = new BolResponse()
  message = '';

  constructor(private bolsService : BolsService) {}

  ngOnInit() {
    this.subscription = this.bolsService
    .getMockBols()
    .subscribe(
      bolResponse => {
        this.bolResponse = bolResponse
      }
    );
  }

  addBarcode(name: string): void {
    
  }

  onEnter(barcode: string, bol: Bol) { 
    console.log(JSON.stringify(bol))
    for(let i =0; bol.cases.length > 0; i++) {
      if(barcode === bol.cases[i].barcode) {
        if(bol.truckTemp > bol.cases[i].minTemp && bol.truckTemp < bol.cases[i].maxTemp) {
          this.message = 'Temperature is okay. Funds released!';
        } else {
          this.message = 'Temperature check failed. Funds not released'; 
        }
        break;
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
