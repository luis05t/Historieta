
import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen.models';
@Injectable({
  providedIn: 'root'
})
export class PaulaService {
  private citizen: Citizen;

  constructor() {
    this.citizen = new Citizen(
      'Paula un nuevo cargamento que llegará esta noche. Necesitamos asegurarnos de que todo salga sin problemas.',
      'Canada'
    );
  }

  getCitizen(): Citizen {
    return this.citizen;
  }

}
