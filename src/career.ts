// #region Classes
export abstract class Class {
  static Description: string = "";
}

export abstract class Academics extends Class {
  static Description: string = "Academics";
}

export abstract class Rogues extends Class {
  static Description: string = "Rogues";
}
// #endregion

// #region Careers
export class Career {
  static Description: string = "";
  static Class = Class;
}

export class Scholar extends Career {
  static Description: string = "Scholar";
  static Class = Academics;
}

export class Outlaw extends Career {
  static Description: string = "Outlaw";
  static Class = Rogues;
}
// #endregion
