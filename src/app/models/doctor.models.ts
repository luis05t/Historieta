// src/app/models/doctor.model.ts
import { Citizen } from "./citizen.models";

export class Doctor extends Citizen {
  constructor(
    name: string,
    city: string,
    public specialization: string,
    public hospital: string
  ) {
    super(name, city);
  }

  // Método específico para un doctor
  treatPatients(): string {
    return `${this.name},  ${this.specialization}, porque yo vengo del ${this.hospital} de ${this.city}.`;
  }
}
