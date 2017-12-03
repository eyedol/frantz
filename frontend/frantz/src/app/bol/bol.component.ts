import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router, ActivatedRoute }       from '@angular/router';
//import {Subscription}                   from 'rxjs/Subscription';
import { BolResponse, Bol }                  from '../common';
import { Subscription } from 'rxjs';
import { BolsService } from './bols.service';
import * as Web3 from 'web3';

@Component({
  selector: 'app-bol',
  templateUrl: './bol.component.html',
  styleUrls: ['./bol.component.scss']
})
export class BolComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  bolResponse: BolResponse = new BolResponse()
  message = '';

  abi: any = '"[{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"releaseFunds","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"},{"name":"price","type":"uint256"}],"name":"newCase","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint8"}],"name":"caseStorage","outputs":[{"name":"seller","type":"address"},{"name":"buyer","type":"address"},{"name":"totalPrice","type":"uint256"},{"name":"isPaid","type":"bool"},{"name":"isReleased","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"pay","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]"'

  constructor(private bolsService : BolsService) {}
  web : Web3
  contract: any
  ngOnInit() {
    this.web = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    this.web.eth.defaultAccount = this.web.eth.accounts[0]
    this.web.personal.unlockAccount(this.web.eth.defaultAccount, "asdasdasd");
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
          this.authorizeCase(bol.cases[i].caseId)
        } else {
          this.message = 'Temperature check failed. Funds not released'; 
        }
        break;
      }
    }
  }

  authorizeCase(id: any) {
    this.contract.releaseFunds(id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
