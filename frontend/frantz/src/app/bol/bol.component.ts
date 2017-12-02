import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router, ActivatedRoute }       from '@angular/router';
//import {Subscription}                   from 'rxjs/Subscription';
import { BolResponse }                  from '../common';

@Component({
  selector: 'app-bol',
  templateUrl: './bol.component.html',
  styleUrls: ['./bol.component.scss']
})
export class BolComponent implements OnInit, OnDestroy {
  //private subscription: Subscription;
  bolResponse: BolResponse = {
    limit: 10,
    next: null,
    offset: 0,
    totalCount: 20,
    objects: [
      {
          buyer: "Herbert",
          cases: [
            {
              barcode: "qewrqwe",
              contract: "asdasdasdfeafa",
            }
          ],
          createdAt: "2017-12-02T15:15:43.377142",
          id: 1,
          resourceUri: "/api/bol/1/",
          vendor: "Hugo"
      },
      {
          buyer: "Herbert2",
          cases: [
            {
              barcode: "asd",
              contract: "asdfeafa",
            }
          ],
          createdAt: "2017-12-02T15:18:19.203218",
          id: 2,
          resourceUri: "/api/bol/2/",
          vendor: "Hugo2"
      },
      {
        buyer: "Herbert 3",
        cases: [
          {
            barcode: "asd",
            contract: "asdfeafa",
          }
        ],
        createdAt: "2017-12-02T15:18:19.203218",
        id: 2,
        resourceUri: "/api/bol/2/",
        vendor: "Hugo 3"
    }
  ]
  };
  constructor() { }

  ngOnInit() {
    //TODO load bols
  }

  ngOnDestroy() {

  }
}
