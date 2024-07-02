import { Injectable } from '@angular/core';
import { DrugDealer } from '../models/drugdealer.models'; 
@Injectable({
  providedIn: 'root'
})
export class AlbertoService {
  private drugDealer: DrugDealer;

  constructor() {
    this.drugDealer = new DrugDealer(
      'Yo soy Alberto',
      'Ecuador',
      'Cartel de los Lovos de',
      'Ecuadro y me aseguraré de que tengan una muestra. Quiero que sepan que estamos serios'
    );
  }

  getDrugDealer(): DrugDealer {
    return this.drugDealer;
  }

  sellDrugs(): string {
    return this.drugDealer.sellDrugs();
  }

}
