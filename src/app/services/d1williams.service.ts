// src/app/services/doctor.service.ts
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.models'; 

@Injectable({
  providedIn: 'root'
})
export class WilliamsService {
  private doctor: Doctor;

  constructor() {
    this.doctor = new Doctor(
      'Dr. Williams',
      'New York',
      'Los muchachos están listos. No habrá errores esta vez,   ',
      'Hospital General'
    );
  }

  getDoctor(): Doctor {
    return this.doctor;
  }

  treatPatients(): string {
    return this.doctor.treatPatients();
  }

}
