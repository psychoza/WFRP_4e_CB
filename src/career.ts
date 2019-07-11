// #region Classes
export class Class {
  Description: string = "";
}

export class Academics extends Class {
  Description: string = "Academics";
}

export class Rogues extends Class {
  Description: string = "Rogues";
}
// #endregion

// #region Careers
export class Career {
  Description: string = "";
  Class: Class;
  Level: number = 1;
  CareerPath: string = ""
}

export class Scholar extends Career {
  Description: string = "Scholar";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Student"
    else if (this.Level == 2)
      return "Scholar";
    else if (this.Level == 3)
      return "Fellow";
    else if (this.Level == 4)
      return "Professor";
    else
      return "";
  }
  set CareerPath(v:string){

  }; 

constructor(){ 
    super();
  this.Class = new Academics();
  }
}

export class Outlaw extends Career {
  Description: string = "Outlaw";
Class: Rogues;
  constructor(){
  super(); 
    this.Class = new Rogues();
}
}
// #endregion
