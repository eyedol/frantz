import { Case } from './case.model' 
export class Bol {

  id: number;
  buyer: string;
  vendor: string;
  resourceUri: string;
  createdAt: string;
  cases: Array<Case>;

  constructor(id = null, buyer='', vendor='',resourceUri='',createdAt='',cases: Array<Case> = null) {
    this.id = id;
    this.buyer = buyer;
    this.vendor = vendor;
    this.resourceUri = resourceUri;
    this.createdAt = createdAt;
    this.cases = cases;
  }
}