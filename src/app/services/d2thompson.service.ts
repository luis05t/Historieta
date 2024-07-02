// src/app/services/healthcare-provider.service.ts
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.models';
@Injectable({
  providedIn: 'root'
})
export class ThompsonTompsom {
  private doctor: Doctor;

  constructor() {
    this.doctor = new Doctor(
      'Dr. Thompson',
      'Chicago',
      'Ya he preparado todo el equipo médico por si algo sale mal. Espero no tener que usarlo.',
      'Hospital'
    );
  }

  getHealthcareProvider(): Doctor {
    return this.doctor;
  }

  diagnosePatients(): string {
    return `${this.doctor.name},  ${this.doctor.specialization}, soy un exelente cirugano ${this.doctor.hospital} de ${this.doctor.city}.`;
  }

}
