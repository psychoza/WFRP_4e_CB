import {ITrapping, Trapping} from "./trapping";

export abstract class TrappingLibrary {
  static AnimalCare: Trapping = new Trapping({ Description: "Animal Care" } as ITrapping);
}
