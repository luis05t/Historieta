export class Citizen {
    constructor(
      public name: string,
      public city: string
    ) {}
  
    dailyRoutine(): string {
      return `${this.name} is living a normal life in ${this.city}.`;
    }
  }
  