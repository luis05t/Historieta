// src/app/services/farmer.service.ts
import { Injectable } from '@angular/core';
import { Farmer } from '../models/farmer.models';

@Injectable({
  providedIn: 'root'
})
export class MarioService {
  private farmer: Farmer;

  constructor() {
    this.farmer = new Farmer(
      'Mi nombre es Mario',
      'Kansas',
      'Las rutas están despejadas. Mis hombres se han encargado de limpiar cualquier obstáculo vamos a pasar por el plantio de ',
      'Arroz de'
    );
  }

  getFarmer(): Farmer {
    return this.farmer;
  }

  farm(): string {
    return this.farmer.harvestCrop();
  }

  // Add more methods specific to farmer's operations
}
