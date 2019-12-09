export interface ITalent {
  Description: string;
}

export class Talent {
  Description: string;

  constructor();
  constructor(obj: ITalent);
  constructor(obj: ITalent = {} as ITalent) {
    this.Description = obj.Description || "";
  }
}
