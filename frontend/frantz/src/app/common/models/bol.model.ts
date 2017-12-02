
import { Case } from './case.model' 

export class Bol {
  id: number;
  buyer: string;
  vendor: string;
  resourceUri: string;
  createdAt: string;
  cases: Case[] = undefined;
}