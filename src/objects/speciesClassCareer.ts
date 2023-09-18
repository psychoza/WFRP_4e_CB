import { Career } from './career';
import { Class } from './class';

export class SpeciesClassCareer {
  Class: Class;
  Career: Career;
  MinimumRange: number;
  MaximumRange: number;

  get Description() {
      return `${this.Class.Description} ${this.Career.Description}`
  }

  constructor(career, minimumRange, maximumRange) {
    this.Career = career;
    this.Class = career.Class;
    this.MinimumRange = minimumRange;
    this.MaximumRange = maximumRange;
  }
}
