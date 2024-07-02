
import { Injectable } from '@angular/core';
import { Businessman } from '../models/businessman.models'; 

@Injectable({
  providedIn: 'root'
})
export class SmithService {
  private businessman: Businessman;

  constructor() {
    this.businessman = new Businessman(
      'Mr. Smith',
      'New York',
      'Tech Industries Inc.',
      'tambien de Information Technology'
    );
  }

  getBusinessman(): Businessman {
    return this.businessman;
  }

  conductBusiness(): string {
    return `${this.businessman.name}, yo me puedo encargar de eso voy a contatar a alguin de  ${this.businessman.company}, contrataré a algunos mercenarios de confianza para reforzar nuestras filas ${this.businessman.industry} del sector ${this.businessman.city}.`;
  }

  
}
