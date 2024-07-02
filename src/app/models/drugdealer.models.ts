
import { Citizen } from "./citizen.models"; 

export class DrugDealer extends Citizen { //Herencias 
  organization: any;
  constructor(
    name: string,
    city: string,
    public gang: string,
    public territory: string
  ) {
    super(name, city);
  }

  
  sellDrugs(): string {
    return `${this.name}  ${this.gang}  ${this.territory}.`;
  }
}
