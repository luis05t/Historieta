// src/app/services/educator.service.ts
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.models';

@Injectable({
  providedIn: 'root'
})
export class AndersonService {
  private educator: Teacher;

  constructor() {
    this.educator = new Teacher(
      'Mr. Anderson',
      'San Francisco',
      'dice que tenemos que hablar de seguridad. Necesitamos más hombres protegiendo los almacenes ',
      'Westside High School'
    );
  }

  getEducator(): Teacher {
    return this.educator;
  }

  conductClass(): string {
    return `${this.educator.name}, un genio en la seguridad  ${this.educator.subject},porque ya se flitraon pruebas en ${this.educator.school} en las empresas de  ${this.educator.city}.`;
  }

  // Add more methods specific to educator's operations
}
