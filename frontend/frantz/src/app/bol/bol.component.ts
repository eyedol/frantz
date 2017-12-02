import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router, ActivatedRoute }       from '@angular/router';
//import {Subscription}                   from 'rxjs/Subscription';
import { BolResponse }                  from '../common';
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
  constructor(private bolsService : BolsService) {
  }

  ngOnInit() {
    this.subscription = this.bolsService
    .getMockBols()
    .subscribe(
      bolResponse => {
        this.bolResponse = bolResponse
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
