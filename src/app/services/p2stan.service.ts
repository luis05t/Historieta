// src/app/services/law-enforcement.service.ts
import { Injectable } from '@angular/core';
import { Police } from '../models/police.models';

@Injectable({
  providedIn: 'root'
})
export class StanService {
  private officer: Police;

  constructor() {
    this.officer = new Police(
      'Stan',
      '67890',
      'State Police',
      'Los Angeles me dice que los informantes en la estación me han dicho que no tienen nada concreto contra nosotros'
    );
  }

  getLawEnforcementOfficer(): Police {
    return this.officer;
  }

  patrolStreets(): string {
    return this.officer.patrolStreets();
  }

}
