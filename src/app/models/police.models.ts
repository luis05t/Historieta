
import { Citizen } from "./citizen.models";

export class Police extends Citizen {
  constructor(
    name: string,
    city: string,
    public badgeNumber: string,
    public department: string
  ) {
    super(name, city);
  }

  patrolStreets(): string {
    return `${this.name}  ${this.badgeNumber} ${this.city}  ${this.department}.`;
  }
}
