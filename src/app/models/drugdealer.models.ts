// src/app/models/drugdealer.model.ts
import { Citizen } from "./citizen.models"; 

export class DrugDealer extends Citizen {
  organization: any;
  constructor(
    name: string,
    city: string,
    public gang: string,
    public territory: string
  ) {
    super(name, city);
  }

  // Método específico para un traficante de drogas
  sellDrugs(): string {
    return `${this.name}  ${this.gang}  ${this.territory}.`;
  }
}
