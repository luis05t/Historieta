import { Injectable } from '@angular/core';
import { Farmer } from '../models/farmer.models';

@Injectable({
  providedIn: 'root'
})
export class InesService {
  private farmer: Farmer;

  constructor() {
    this.farmer = new Farmer(
      'Ines',
      'Austria Kansas',
      'Tenemos los vehículos listos y con las placas cambiadas. Nadie podrá rastrearnos como dijo mario ya quito todos los obstaculos y vamos a pasar por el plantio de',
      'Arroz de'
    );
  }

  getFarmer(): Farmer {
    return this.farmer;
  }

  farm(): string {
    return this.farmer.harvestCrop();
  }

}
