
import { Injectable } from '@angular/core';
import { Businessman } from '../models/businessman.models'; 

@Injectable({
  providedIn: 'root'
})
export class LolaService {
  private businessman: Businessman;

  constructor() {
    this.businessman = new Businessman(
      'Mr. Lola',
      'Miami que ya esta lista con la parte financiera. Ya he movido el dinero a nuestras cuentas en el extranjero ahora si podeomos salir del pais y tener todos lo lujos y vivir bien. FIN',
      'Apple',
      'Hakin'
    );
  }

  getBusinessman(): Businessman {
    return this.businessman;
  }

  manageCompany(): string {
    return `${this.businessman.name}, CEO de ${this.businessman.company}, una magnate en${this.businessman.industry} en  ${this.businessman.city}`;
  }

  
}
