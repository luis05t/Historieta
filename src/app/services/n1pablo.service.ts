// src/app/services/drugdealer.service.ts
import { Injectable } from '@angular/core';
import { DrugDealer } from '../models/drugdealer.models'; 
@Injectable({
  providedIn: 'root'
})
export class PabloService {
  private drugDealer: DrugDealer;

  constructor() {
    this.drugDealer = new DrugDealer(
      'Soy Pablo Escobar',
      'Medellín',
      'del Cartel de Medellín',
      'y se que los compradores están impacientes. Quieren ver la mercancía antes de cerrar el trato pero soy uno de los mas duros por eso nunca fallo mi palabra por eso soy reconicido en mi pais.'
    );
  }

  getDrugDealer(): DrugDealer {
    return this.drugDealer;
  }

  sellDrugs(): string {
    return this.drugDealer.sellDrugs();
  }

  // Add more methods specific to drug dealer's operations
}
