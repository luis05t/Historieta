import { Citizen } from "./citizen.models";

export class Farmer extends Citizen {
  constructor(
    name: string,
    city: string,
    public farmName: string,
    public crop: string
  ) {
    super(name, city);
  }


  harvestCrop(): string {
    return `${this.name}  ${this.farmName}   ${this.crop}  ${this.city}.`;
  }
}
