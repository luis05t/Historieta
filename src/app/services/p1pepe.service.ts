// src/app/services/police.service.ts
import { Injectable } from '@angular/core';
import { Police } from '../models/police.models'; 

@Injectable({
  providedIn: 'root'
})
export class PepeService {
  private policeOfficer: Police;

  constructor() {
    this.policeOfficer = new Police(
      'Pepe',
      '12345',
      'Local Police Department',
      'New York es un inflitrado de la mafia me dice que hay rumores de que la policía está aumentando las patrullas en la zona. Debemos ser cautelosos'
    );
  }

  getPoliceOfficer(): Police {
    return this.policeOfficer;
  }

  patrolStreets(): string {
    return this.policeOfficer.patrolStreets();
  }

}
