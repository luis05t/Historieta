// src/app/models/teacher.model.ts
import { Citizen } from "./citizen.models";

export class Teacher extends Citizen {
  constructor(
    name: string,
    city: string,
    public subject: string,
    public school: string
  ) {
    super(name, city);
  }

  // Método específico para un profesor
  teachClass(): string {
    return `${this.name}  ${this.subject}  ${this.school}  ${this.city}.`;
  }
}
