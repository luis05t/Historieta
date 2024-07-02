
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
  teachClass(): string {
    return `${this.name}  ${this.subject}  ${this.school}  ${this.city}.`;
  }
}
