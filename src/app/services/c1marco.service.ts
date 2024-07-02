// src/app/services/citizen.service.ts
import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.models'; 

@Injectable({
  providedIn: 'root'
})
export class MarcoService {
  private citizen: Citizen;

  constructor() {
    this.citizen = new Citizen(
      'Marco un Ecuatoriano de 18 años que se dedica a la mafia dice tener un nuevo cargamento que llegará esta noche. Necesitamos asegurarnos de que todo salga sin problemas.',
      'Ecuador',
    );
  }

  getCitizen(): Citizen {
    return this.citizen;
  }

  // Add more methods specific to citizen's operations
}
