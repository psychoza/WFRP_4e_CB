import { Skill, ISkill } from "./skill";

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
  Skills: Skill[] = []
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
  set CareerPath(v: string) { };

  Skills: Skill[] = [];

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      new Skill({Description: "Consume Alcohol", CharacteristicType: CharacteristicType.Toughness} as ISkill),
      new Skill({Description: "Entertain (Storytelling)", CharacteristicType: CharacteristicType.Fellowship} as ISkill),
      new Skill({Description: "Gamble", CharacteristicType: CharacteristicType.Intelligence} as ISkill),
      new Skill({Description: "Gossip", CharacteristicType: CharacteristicType.Fellowship} as ISkill),
      new Skill({Description: "Haggle", CharacteristicType: CharacteristicType.Fellowship} as ISkill),
      new Skill({Description: "Language (Classical)", CharacteristicType: CharacteristicType.Dexterity} as ISkill),
      new Skill({Description: "Lore (Engineering)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Lore (Geology)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Lore (Heraldry)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Lore (History)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Lore (Law)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Lore (Magick)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Lore (Metallurgy)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Lore (Science)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Lore (Theology)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
      new Skill({Description: "Research", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true} as ISkill),
    ] 
  }
}

export class Outlaw extends Career {
  Description: string = "Outlaw";
  Class: Rogues;
  constructor() {
    super();
    this.Class = new Rogues();
  }
}
// #endregion
