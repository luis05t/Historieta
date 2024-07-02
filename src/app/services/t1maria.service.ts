import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.models'; 

@Injectable({
  providedIn: 'root'
})
export class MariaService {
  private teacher: Teacher;

  constructor() {
    this.teacher = new Teacher(
      'Maria',
      'Boston nos confirma que todas las transacciones estarán perfectamente encubiertas.',
      'Matematicas',
      'Central High School'
    );
  }

  getTeacher(): Teacher {
    return this.teacher;
  }

  teachClass(): string {
    return `${this.teacher.name}, es exeletente  ${this.teacher.subject}, uns dura para el lavado de dinero estudio en la ${this.teacher.school} en ${this.teacher.city}.`;
  }

}
