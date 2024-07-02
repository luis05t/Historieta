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

  
  treatPatients(): string {
    return `${this.name},  ${this.specialization}, porque yo vengo del ${this.hospital} de ${this.city}.`;
  }
}

export class DoctorCity extends Doctor {
  override treatPatients(): string {
    return `${this.name},  ${this.specialization}, yo vengo de ${this.city}.`;
  }
}