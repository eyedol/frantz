import { Bol } from './bol.model';

export class BolResponse {
  limit: number;
  next: string;
  offset: number;
  totalCount: number;
  objects: Array<Bol>;

  constructor(limit = 20, next = '', offset = 0, totalCount = 0, objects: Array<Bol> = null) {
    this.limit = limit;
    this.next = next;
    this.offset = offset;
    this.totalCount = totalCount;
    this.objects = objects
  }
}