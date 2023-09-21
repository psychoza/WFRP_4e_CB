export interface ITrapping {
  Description: string;
}

export class Trapping {
  Description: string;

  constructor();
  constructor(obj: ITrapping);
  constructor(obj: ITrapping = {} as ITrapping) {
    this.Description = obj && obj.Description || "";
  }
}
