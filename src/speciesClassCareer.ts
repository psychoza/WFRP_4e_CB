import { Class, Career } from './career';
export class SpeciesClassCareer {
  Class: Class;
  Career: Career;
  MinimumRange: number;
  MaximumRange: number;
  constructor(career, minimumRange, maximumRange) {
    this.Career = career;
    this.Class = career.Class;
    this.MinimumRange = minimumRange;
    this.MaximumRange = maximumRange;
  }
}
