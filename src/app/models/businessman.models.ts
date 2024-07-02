import { Citizen } from "./citizen.models"; 

export class Businessman extends Citizen {
  constructor(
    name: string,
    city: string,
    public company: string,
    public industry: string
  ) {
    super(name, city);
  }

  conductBusiness(): string {
    return `${this.name}  ${this.company} ${this.industry}  ${this.city}.`;
  }
}
