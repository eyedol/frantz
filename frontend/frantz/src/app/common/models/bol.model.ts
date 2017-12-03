
import { Case } from './case.model' 

export class Bol {
  id: number;
  name: string;
  buyer: string;
  seller: string;
  resourceUri: string;
  createdAt: string;
  cases: Case[] = undefined;
  truckTemp: number;
}