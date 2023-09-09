import { Skill } from "./skill";
import { SkillLibrary } from './skillLibrary';
import { CharacteristicType } from './characteristicType';

// #region Classes
export class Class {
  Description: string = "";
}

export class Academics extends Class {
  Description: string = "Academics";
}

export class Burghers extends Class {
  Description: string = "Burghers";
}

export class Courtiers extends Class {
  Description: string = "Courtiers";
}

export class Peasants extends Class {
  Description: string = "Peasants";
}

export class Rangers extends Class {
  Description: string = "Rangers";
}

export class Riverfolk extends Class {
  Description: string = "Riverfolk";
}

export class Rogues extends Class {
  Description: string = "Rogues";
}

export class Warriors extends Class {
  Description: string = "Warriors";
}



// #endregion

// #region Careers
export class Career {
  Description: string = "";
  Class: Class;
  Level: number = 1;
  private _CareerPath: string = "";
  public get CareerPath(): string {
        return this._CareerPath;
    }
    public set CareerPath(value: string) {
        this._CareerPath = value;
    }

  private _Status: string = "";
  public get Status(): string {
        return this._Status;
    }
    public set Status(value: string) {
        this._Status = value;
    }
  Skills: Skill[] = [];
  private _Characteristics: CharacteristicType[] = [];
  public get Characteristics(): CharacteristicType[] {
        return this._Characteristics;
    }
    public set Characteristics(value: CharacteristicType[]) {
        this._Characteristics = value;
    }
}

// #region Academics
export class Apothecary extends Career {
  Description: string = "Apothecary";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Apprentice"
    else if (this.Level == 2)
      return "Apothecary";
    else if (this.Level == 3)
      return "Master Apothecary";
    else if (this.Level == 4)
      return "Apothecary-General";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.Toughness, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Heal,
      SkillLibrary.Language_Classical,
      SkillLibrary.Lore_Chemistry,
      SkillLibrary.Lore_Medicine,
      SkillLibrary.Lore_Plants,
      SkillLibrary.Trade_Apothecary,
      SkillLibrary.Trade_Poisoner,
      SkillLibrary.Research
    ];
  }
}

export class Engineer extends Career {
  Description: string = "Engineer";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Student Engineer"
    else if (this.Level == 2)
      return "Engineer";
    else if (this.Level == 3)
      return "Master Engineer";
    else if (this.Level == 4)
      return "Chartered Engineer";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 4"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 4";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.BallisticSkill, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Toughness);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Language_Classical,
      SkillLibrary.Lore_Engineering,
      SkillLibrary.Perception,
      SkillLibrary.Ranged_Blackpowder,
      SkillLibrary.Trade_Engineer
    ];
  }
}

export class Lawyer extends Career {
  Description: string = "Lawyer";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Student Lawyer"
    else if (this.Level == 2)
      return "Lawyer";
    else if (this.Level == 3)
      return "Barrister";
    else if (this.Level == 4)
      return "Judge";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 4"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.Initiative, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Toughness);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Endurance,
      SkillLibrary.Haggle,
      SkillLibrary.Language_Classical,
      SkillLibrary.Lore_Law,
      SkillLibrary.Lore_Theology,
      SkillLibrary.Perception,
      SkillLibrary.Research
    ];
  }
}

export class Nun extends Career {
  Description: string = "Nun";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Novitiate"
    else if (this.Level == 2)
      return "Nun";
    else if (this.Level == 3)
      return "Abbess";
    else if (this.Level == 4)
      return "Prioress General";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Silver 2";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.Fellowship, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Toughness);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.Art_Calligraphy,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gossip,
      SkillLibrary.Heal,
      SkillLibrary.Lore_Theology,
      SkillLibrary.Pray
    ];
  }
}

export class Physician extends Career {
  Description: string = "Physician";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Physician's Apprentice"
    else if (this.Level == 2)
      return "Physician";
    else if (this.Level == 3)
      return "Doktor";
    else if (this.Level == 4)
      return "Court Physician";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 4"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.Willpower, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Agility);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.Cool,
      SkillLibrary.Drive,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Heal,
      SkillLibrary.Perception,
      SkillLibrary.SleightOfHand
    ];
  }
}

export class Priest extends Career {
  Description: string = "Priest";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Initiate"
    else if (this.Level == 2)
      return "Priest";
    else if (this.Level == 3)
      return "High Priest";
    else if (this.Level == 4)
      return "Lector";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Agility, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Initiative);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Theology,
      SkillLibrary.Perception,
      SkillLibrary.Pray,
      SkillLibrary.Research
    ];
  }
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
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Dexterity);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Language_Classical,
      SkillLibrary.Lore_Engineering,
      SkillLibrary.Lore_Geology,
      SkillLibrary.Lore_Heraldry,
      SkillLibrary.Lore_History,
      SkillLibrary.Lore_Law,
      SkillLibrary.Lore_Magick,
      SkillLibrary.Lore_Metallurgy,
      SkillLibrary.Lore_Science,
      SkillLibrary.Lore_Theology,
      SkillLibrary.Research
    ];
  }
}

export class Wizard extends Career {
  Description: string = "Wizard";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Wizard's Apprentice"
    else if (this.Level == 2)
      return "Wizard";
    else if (this.Level == 3)
      return "Master Wizard";
    else if (this.Level == 4)
      return "Wizard Lord";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Intelligence, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Agility);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.Channelling_Aqshy,
      SkillLibrary.Channelling_Azyr,
      SkillLibrary.Channelling_Chamon,
      SkillLibrary.Channelling_Dhar,
      SkillLibrary.Channelling_Ghur,
      SkillLibrary.Channelling_Ghyran,
      SkillLibrary.Channelling_Hysh,
      SkillLibrary.Channelling_Shyish,
      SkillLibrary.Channelling_Ulgu,
      SkillLibrary.Dodge,
      SkillLibrary.Intuition,
      SkillLibrary.Language_Magick,
      SkillLibrary.Lore_Magick,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Melee_PoleArm,
      SkillLibrary.Perception
    ];
  }
}
// #endregion

// #region Burghers

export class Agitator extends Career {
  Description: string = "Agitator";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Pamphleteer"
    else if (this.Level == 2)
      return "Agitator";
    else if (this.Level == 3)
      return "Rabble Rouser";
    else if (this.Level == 4)
      return "Demagogue";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 3";
    else if (this.Level == 4)
      return "Brass 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Intelligence, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Agility);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.WeaponSkill);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Initiative);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Art_Writing,
      SkillLibrary.Bribery,
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Lore_Plants,
      SkillLibrary.Trade_Printing
    ];
  }
}

export class Artisan extends Career {
  Description: string = "Artisan";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Apprentice Artisan"
    else if (this.Level == 2)
      return "Artisan";
    else if (this.Level == 3)
      return "Master Artisan";
    else if (this.Level == 4)
      return "Guildmaster";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Cool,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Evaluate,
      SkillLibrary.Stealth_Urban,
      SkillLibrary.Trade_Apothecary,
      SkillLibrary.Trade_Calligrapher,
      SkillLibrary.Trade_Carpenter,
      SkillLibrary.Trade_Chandler,
      SkillLibrary.Trade_Cook,
      SkillLibrary.Trade_Embalmer,
      SkillLibrary.Trade_Engineer,
      SkillLibrary.Trade_Poisoner,
      SkillLibrary.Trade_Printing,
      SkillLibrary.Trade_Smith,
      SkillLibrary.Trade_Tanner
    ];
  }
}

export class Beggar extends Career {
  Description: string = "Beggar";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Pauper"
    else if (this.Level == 2)
      return "Beggar";
    else if (this.Level == 3)
      return "Master Beggar";
    else if (this.Level == 4)
      return "Beggar King";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 0"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 4";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Agility, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Initiative);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.AnimalCare,
      SkillLibrary.Bribery,
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Drive,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle
    ];
  }
}

export class Investigator extends Career {
  Description: string = "Investigator";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Sleuth"
    else if (this.Level == 2)
      return "Investigator";
    else if (this.Level == 3)
      return "Master Investigator";
    else if (this.Level == 4)
      return "Detective";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Initiative, CharacteristicType.Agility, CharacteristicType.Intelligence];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Dexterity);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.Climb,
      SkillLibrary.Cool,
      SkillLibrary.Gossip,
      SkillLibrary.Intuition,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Urban,
      SkillLibrary.Track
    ];
  }
}

export class Merchant extends Career {
  Description: string = "Merchant";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Trader"
    else if (this.Level == 2)
      return "Merchant";
    else if (this.Level == 3)
      return "Master Merchant";
    else if (this.Level == 4)
      return "Merchant Prince";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 2"
    else if (this.Level == 2)
      return "Silver 5";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Agility, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Intelligence);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.AnimalCare,
      SkillLibrary.Bribery,
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Drive,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle
    ];
  }
}

export class RatCatcher extends Career {
  Description: string = "Rat Catcher";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Rat Hunter"
    else if (this.Level == 2)
      return "Rat Catcher";
    else if (this.Level == 3)
      return "Sewer Jack";
    else if (this.Level == 4)
      return "Exterminator";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 2";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.BallisticSkill, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Toughness);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Strength);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.AnimalTraining_Dog,
      SkillLibrary.CharmAnimal,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Endurance,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Ranged_Sling,
      SkillLibrary.Stealth_Underground,
      SkillLibrary.Stealth_Urban
    ];
  }
}

export class Townsman extends Career {
  Description: string = "Townsman";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Clerk"
    else if (this.Level == 2)
      return "Townsman";
    else if (this.Level == 3)
      return "Town Councillor";
    else if (this.Level == 4)
      return "Burgomeister";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Intelligence, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Dexterity);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Drive,
      SkillLibrary.Dodge,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle
    ];
  }
}

export class Watchman extends Career {
  Description: string = "Watchman";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Watch Recruit"
    else if (this.Level == 2)
      return "Watchman";
    else if (this.Level == 3)
      return "Watch Sergeant";
    else if (this.Level == 4)
      return "Watch Captain";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gamble,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Melee_Cavalry,
      SkillLibrary.Melee_Fencing,
      SkillLibrary.Melee_Flail,
      SkillLibrary.Melee_Parry,
      SkillLibrary.Melee_PoleArm,
      SkillLibrary.Melee_TwoHanded,
      SkillLibrary.Perception
    ];
  }
}
// #endregion

// #region Courtiers

export class Advisor extends Career {
  Description: string = "Advisor";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Aide"
    else if (this.Level == 2)
      return "Advisor";
    else if (this.Level == 3)
      return "Counsellor";
    else if (this.Level == 4)
      return "Chancellor";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 2"
    else if (this.Level == 2)
      return "Silver 4";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Language_Classical,
      SkillLibrary.Lore_Politics,
      SkillLibrary.Perception
    ];
  }
}

export class Artist extends Career {
  Description: string = "Artist";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Apprentice Artist"
    else if (this.Level == 2)
      return "Artist";
    else if (this.Level == 3)
      return "Master Artist";
    else if (this.Level == 4)
      return "Maestro";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Initiative, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Art_Calligraphy,
      SkillLibrary.Art_Cartography,
      SkillLibrary.Art_Engraving,
      SkillLibrary.Art_Mosaics,
      SkillLibrary.Art_Painting,
      SkillLibrary.Art_Sculpture,
      SkillLibrary.Art_Tattoo,
      SkillLibrary.Art_Weaving,
      SkillLibrary.Art_Writing,
      SkillLibrary.Cool,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Evaluate,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Urban
    ];
  }
}


export class Duelist extends Career {
  Description: string = "Duelist";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Fencer"
    else if (this.Level == 2)
      return "Duelist";
    else if (this.Level == 3)
      return "Duelmaster";
    else if (this.Level == 4)
      return "Judicial Champion";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 3"
    else if (this.Level == 2)
      return "Silver 5";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Strength);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Heal,
      SkillLibrary.Intuition,
      SkillLibrary.Language_Classical,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Melee_Cavalry,
      SkillLibrary.Melee_Fencing,
      SkillLibrary.Melee_Flail,
      SkillLibrary.Melee_Parry,
      SkillLibrary.Melee_PoleArm,
      SkillLibrary.Melee_TwoHanded,
      SkillLibrary.Perception
    ];
  }
}


export class Envoy extends Career {
  Description: string = "Envoy";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Herald"
    else if (this.Level == 2)
      return "Envoy";
    else if (this.Level == 3)
      return "Diplomat";
    else if (this.Level == 4)
      return "Ambassador";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 2"
    else if (this.Level == 2)
      return "Silver 4";
    else if (this.Level == 3)
      return "Gold 2";
    else if (this.Level == 4)
      return "Gold 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Agility, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Intelligence);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Charm,
      SkillLibrary.Drive,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Ride_Horse,
      SkillLibrary.Row
    ];
  }
}


export class Noble extends Career {
  Description: string = "Noble";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Scion"
    else if (this.Level == 2)
      return "Noble";
    else if (this.Level == 3)
      return "Magnate";
    else if (this.Level == 4)
      return "Noble Lord";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Gold 1"
    else if (this.Level == 2)
      return "Gold 3";
    else if (this.Level == 3)
      return "Gold 5";
    else if (this.Level == 4)
      return "Gold 7";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Initiative, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gamble,
      SkillLibrary.Intimidate,
      SkillLibrary.Leadership,
      SkillLibrary.Lore_Heraldry,
      SkillLibrary.Melee_Fencing,
      SkillLibrary.Play_Bagpipe,
      SkillLibrary.Play_Harpsichord,
      SkillLibrary.Play_Horn,
      SkillLibrary.Play_Lute,
      SkillLibrary.Play_Violin
    ];
  }
}

export class Servant extends Career {
  Description: string = "Servant";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Menial"
    else if (this.Level == 2)
      return "Servant";
    else if (this.Level == 3)
      return "Attendant";
    else if (this.Level == 4)
      return "Steward";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.Drive,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Rural,
      SkillLibrary.Stealth_Underground,
      SkillLibrary.Stealth_Urban
    ];
  }
}

export class Spy extends Career {
  Description: string = "Spy";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Informer"
    else if (this.Level == 2)
      return "Spy";
    else if (this.Level == 3)
      return "Agent";
    else if (this.Level == 4)
      return "Spymaster";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 4";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Willpower, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.Charm,
      SkillLibrary.Cool,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Rural,
      SkillLibrary.Stealth_Underground,
      SkillLibrary.Stealth_Urban
    ];
  }
}

export class Warden extends Career {
  Description: string = "Warden";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Custodian"
    else if (this.Level == 2)
      return "Warden";
    else if (this.Level == 3)
      return "Seneschal";
    else if (this.Level == 4)
      return "Governor";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.CharmAnimal,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Local,
      SkillLibrary.Perception
    ];
  }
}
// #endregion

// #region Peasants
export class Bailiff extends Career {
  Description: string = "Bailiff";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Tax Collector"
    else if (this.Level == 2)
      return "Bailiff";
    else if (this.Level == 3)
      return "Reeve";
    else if (this.Level == 4)
      return "Magistrate";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 5";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Initiative, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Agility);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intimidate,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Perception
    ];
  }
}

export class HedgeWitch extends Career {
  Description: string = "Hedge Witch";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Hedge Apprentice"
    else if (this.Level == 2)
      return "Hedge Witch";
    else if (this.Level == 3)
      return "Hedge Master";
    else if (this.Level == 4)
      return "Hedgewise";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 3";
    else if (this.Level == 4)
      return "Brass 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Intelligence);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.Channelling_Aqshy,
      SkillLibrary.Channelling_Azyr,
      SkillLibrary.Channelling_Chamon,
      SkillLibrary.Channelling_Dhar,
      SkillLibrary.Channelling_Ghur,
      SkillLibrary.Channelling_Ghyran,
      SkillLibrary.Channelling_Hysh,
      SkillLibrary.Channelling_Shyish,
      SkillLibrary.Channelling_Ulgu,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Language_Magick,
      SkillLibrary.Lore_Folklore,
      SkillLibrary.Lore_Heraldry,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception
    ];
  }
}

export class Herbalist extends Career {
  Description: string = "Herbalist";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Herb Gatherer"
    else if (this.Level == 2)
      return "Herbalist";
    else if (this.Level == 3)
      return "Herb Master";
    else if (this.Level == 4)
      return "Herbwise";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Dexterity);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.CharmAnimal,
      SkillLibrary.Climb,
      SkillLibrary.Endurance,
      SkillLibrary.Lore_Herbs,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception,
      SkillLibrary.Swim,
      SkillLibrary.Trade_Herbalist
    ];
  }
}

export class Hunter extends Career {
  Description: string = "Hunter";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Trapper"
    else if (this.Level == 2)
      return "Hunter";
    else if (this.Level == 3)
      return "Tracker";
    else if (this.Level == 4)
      return "Huntsmaster";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.CharmAnimal,
      SkillLibrary.Climb,
      SkillLibrary.Endurance,
      SkillLibrary.Lore_Beasts,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception,
      SkillLibrary.Ranged_Bow,
      SkillLibrary.SetTrap
    ];
  }
}

export class Miner extends Career {
  Description: string = "Miner";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Prospector"
    else if (this.Level == 2)
      return "Miner";
    else if (this.Level == 3)
      return "Master Miner";
    else if (this.Level == 4)
      return "Mine Foreman";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Brass 5";
    else if (this.Level == 4)
      return "Silver 4";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Local,
      SkillLibrary.Melee_TwoHanded,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception,
      SkillLibrary.Swim
    ];
  }
}

export class Mystic extends Career {
  Description: string = "Mystic";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Fortune Teller"
    else if (this.Level == 2)
      return "Mystic";
    else if (this.Level == 3)
      return "Sage";
    else if (this.Level == 4)
      return "Seer";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 3";
    else if (this.Level == 4)
      return "Brass 4";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Initiative, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Agility);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.Entertain_FortuneTelling,
      SkillLibrary.Dodge,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intuition,
      SkillLibrary.Perception,
      SkillLibrary.SleightOfHand
    ];
  }
}

export class Scout extends Career {
  Description: string = "Scout";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Guide"
    else if (this.Level == 2)
      return "Scout";
    else if (this.Level == 3)
      return "Pathfinder";
    else if (this.Level == 4)
      return "Explorer";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Brass 5";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Dexterity);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.CharmAnimal,
      SkillLibrary.Climb,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Lore_Local,
      SkillLibrary.Melee_Basic,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception
    ];
  }
}

export class Villager extends Career {
  Description: string = "Villager";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Peasant"
    else if (this.Level == 2)
      return "Villager";
    else if (this.Level == 3)
      return "Councillor";
    else if (this.Level == 4)
      return "Village Elder";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Brass 4";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.AnimalCare,
      SkillLibrary.Athletics,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Lore_Local,
      SkillLibrary.OutdoorSurvival
    ];
  }
}
// #endregion

// #region Rangers
export class BountyHunter extends Career {
  Description: string = "Bounty Hunter";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Thief-taker"
    else if (this.Level == 2)
      return "Bounty Hunter";
    else if (this.Level == 3)
      return "Master Bounty Hunter";
    else if (this.Level == 4)
      return "Bounty Hunter General";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Strength);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.Charm,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intuition,
      SkillLibrary.Melee_Basic,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception
    ];
  }
}

export class Coachman extends Career {
  Description: string = "Coachman";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Postilion"
    else if (this.Level == 2)
      return "Coachman";
    else if (this.Level == 3)
      return "Coach Master";
    else if (this.Level == 4)
      return "Route Master";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Agility);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.WeaponSkill);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Initiative);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.AnimalCare,
      SkillLibrary.CharmAnimal,
      SkillLibrary.Climb,
      SkillLibrary.Drive,
      SkillLibrary.Endurance,
      SkillLibrary.Perception,
      SkillLibrary.Ranged_Entangling,
      SkillLibrary.Ride_Horse
    ];
  }
}

export class Entertainer extends Career {
  Description: string = "Entertainer";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Busker"
    else if (this.Level == 2)
      return "Entertainer";
    else if (this.Level == 3)
      return "Troubadour";
    else if (this.Level == 4)
      return "Troupe Leader";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Brass 5";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.BallisticSkill);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Toughness);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Charm,
      SkillLibrary.Entertain_Acting,
      SkillLibrary.Entertain_Comedy,
      SkillLibrary.Entertain_Singing,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Perform_Acrobatics,
      SkillLibrary.Perform_Clowning,
      SkillLibrary.Perform_Dancing,
      SkillLibrary.Perform_Firebreathing,
      SkillLibrary.Perform_Juggling,
      SkillLibrary.Perform_Miming,
      SkillLibrary.Perform_RopeWalking,
      SkillLibrary.Play_Bagpipe,
      SkillLibrary.Play_Harpsichord,
      SkillLibrary.Play_Horn,
      SkillLibrary.Play_Lute,
      SkillLibrary.Play_Violin,
      SkillLibrary.SleightOfHand
    ];
  }
}

export class Flagellant extends Career {
  Description: string = "Flagellant";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Zealot"
    else if (this.Level == 2)
      return "Flagellant";
    else if (this.Level == 3)
      return "Penitent";
    else if (this.Level == 4)
      return "Prophet of Doom";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 0"
    else if (this.Level == 2)
      return "Brass 0";
    else if (this.Level == 3)
      return "Brass 0";
    else if (this.Level == 4)
      return "Brass 0";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Toughness];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Heal,
      SkillLibrary.Intimidate,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Sigmar,
      SkillLibrary.Melee_Flail,
      SkillLibrary.OutdoorSurvival
    ];
  }
}

export class Messenger extends Career {
  Description: string = "Messenger";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Runner"
    else if (this.Level == 2)
      return "Messenger";
    else if (this.Level == 3)
      return "Courier";
    else if (this.Level == 4)
      return "Courier-Captain";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Navigation,      
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Perception
    ];
  }
}

export class Pedlar extends Career {
  Description: string = "Pedlar";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Vagabond"
    else if (this.Level == 2)
      return "Pedlar";
    else if (this.Level == 3)
      return "Master Pedlar";
    else if (this.Level == 4)
      return "Wandering Trader";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Dexterity, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.Endurance,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intuition,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Stealth_Rural,
      SkillLibrary.Stealth_Urban
    ];
  }
}

export class RoadWarden extends Career {
  Description: string = "Road Warden";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Toll Keeper"
    else if (this.Level == 2)
      return "Road Warden";
    else if (this.Level == 3)
      return "Road Sergeant";
    else if (this.Level == 4)
      return "Road Captain";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 5"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 4";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Toughness, CharacteristicType.Initiative];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Perception,
      SkillLibrary.Ranged_Crossbow
    ];
  }
}

export class WitchHunter extends Career {
  Description: string = "Witch Hunter";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Interrogator"
    else if (this.Level == 2)
      return "Witch Hunter";
    else if (this.Level == 3)
      return "Inquisitor";
    else if (this.Level == 4)
      return "Witchfinder General";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Heal,
      SkillLibrary.Intimidate,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Torture,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Perception
    ];
  }
}
// #endregion

// #region Riverfolk
export class Boatman extends Career {
  Description: string = "Boatman";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Boat-hand"
    else if (this.Level == 2)
      return "Boatman";
    else if (this.Level == 3)
      return "Bargeswain";
    else if (this.Level == 4)
      return "Barge Master";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Dexterity);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Row,
      SkillLibrary.Sail,
      SkillLibrary.Swim
    ];
  }
}

export class Huffer extends Career {
  Description: string = "Huffer";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Riverguide"
    else if (this.Level == 2)
      return "Huffer";
    else if (this.Level == 3)
      return "Pilot";
    else if (this.Level == 4)
      return "Master Pilot";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 4"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Initiative];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gossip,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Local,
      SkillLibrary.Lore_Riverways,
      SkillLibrary.Perception,
      SkillLibrary.Row,
      SkillLibrary.Swim
    ];
  }
}

export class Riverwarden extends Career {
  Description: string = "Riverwarden";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "River Recruit"
    else if (this.Level == 2)
      return "Riverwarden";
    else if (this.Level == 3)
      return "Shipsword";
    else if (this.Level == 4)
      return "Shipsword Master";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 4";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Strength, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Perception,
      SkillLibrary.Row,
      SkillLibrary.Sail,
      SkillLibrary.Swim
    ];
  }
}

export class Riverwoman extends Career {
  Description: string = "Riverwoman";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Greenfish"
    else if (this.Level == 2)
      return "Riverwoman";
    else if (this.Level == 3)
      return "Riverwise";
    else if (this.Level == 4)
      return "River Elder";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Brass 5";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Agility, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Row,
      SkillLibrary.Swim
    ];
  }
}

export class Seaman extends Career {
  Description: string = "Seaman";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Landsman"
    else if (this.Level == 2)
      return "Seaman";
    else if (this.Level == 3)
      return "Boatswain";
    else if (this.Level == 4)
      return "Ship's Master";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Row,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Sail,
      SkillLibrary.Swim
    ];
  }
}

export class Smuggler extends Career {
  Description: string = "Smuggler";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "River Runner"
    else if (this.Level == 2)
      return "Smuggler";
    else if (this.Level == 3)
      return "Master Smuggler";
    else if (this.Level == 4)
      return "Smuggler King";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Brass 5";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Dexterity, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Bribery,
      SkillLibrary.Cool,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Row,
      SkillLibrary.Sail,
      SkillLibrary.Stealth_Rural,
      SkillLibrary.Stealth_Urban,
      SkillLibrary.Swim
    ];
  }
}

export class Stevedore extends Career {
  Description: string = "Stevedore";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Dockhand"
    else if (this.Level == 2)
      return "Stevedore";
    else if (this.Level == 3)
      return "Foreman";
    else if (this.Level == 4)
      return "Dock Master";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Initiative];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Strength);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Swim
    ];
  }
}

export class Wrecker extends Career {
  Description: string = "Wrecker";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Cargo Scavenger"
    else if (this.Level == 2)
      return "Wrecker";
    else if (this.Level == 3)
      return "River Pirate";
    else if (this.Level == 4)
      return "Wrecker Captain";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Brass 5";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Initiative];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.BallisticSkill);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,      
      SkillLibrary.Melee_Basic,
      SkillLibrary.Row,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Swim
    ];
  }
}
// #endregion

// #region Rogues
export class Bawd extends Career {
  Description: string = "Bawd";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Hustler"
    else if (this.Level == 2)
      return "Bawd";
    else if (this.Level == 3)
      return "Procurer";
    else if (this.Level == 4)
      return "Ringleader";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Entertain_Acting,
      SkillLibrary.Entertain_Comedy,
      SkillLibrary.Entertain_Singing,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intimidate
    ];
  }
}

export class Charlatan extends Career {
  Description: string = "Charlatan";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Swindler"
    else if (this.Level == 2)
      return "Charlatan";
    else if (this.Level == 3)
      return "Con Artist";
    else if (this.Level == 4)
      return "Scoundrel";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Brass 5";
    else if (this.Level == 3)
      return "Silver 2";
    else if (this.Level == 4)
      return "Silver 4";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Initiative, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Agility);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Charm,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.SleightOfHand
    ];
  }
}

export class Fence extends Career {
  Description: string = "Fence";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Broker"
    else if (this.Level == 2)
      return "Fence";
    else if (this.Level == 3)
      return "Master Fence";
    else if (this.Level == 4)
      return "Black Marketeer";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 4";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Initiative, CharacteristicType.Agility, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Dexterity);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Evaluate,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Melee_Basic
    ];
  }
}

export class GraveRobber extends Career {
  Description: string = "Grave Robber";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Body Snatcher"
    else if (this.Level == 2)
      return "Grave Robber";
    else if (this.Level == 3)
      return "Tomb Robber";
    else if (this.Level == 4)
      return "Treasure Hunter";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Initiative, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Dexterity);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Climb,
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Intuition,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Rural,
      SkillLibrary.Stealth_Underground,
      SkillLibrary.Stealth_Urban
    ];
  }
}

export class Outlaw extends Career {
  Description: string = "Outlaw";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Brigand"
    else if (this.Level == 2)
      return "Outlaw";
    else if (this.Level == 3)
      return "Outlaw Chief";
    else if (this.Level == 4)
      return "Bandit King";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 4";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Toughness];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Gamble,
      SkillLibrary.Intimidate,
      SkillLibrary.Melee_Basic,
      SkillLibrary.OutdoorSurvival
    ];
  }
}

export class Racketeer extends Career {
  Description: string = "Racketeer";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Thug"
    else if (this.Level == 2)
      return "Racketeer";
    else if (this.Level == 3)
      return "Gang Boss";
    else if (this.Level == 4)
      return "Crime Lord";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Brass 5";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Toughness];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Intimidate,
      SkillLibrary.Lore_Local,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Stealth_Urban
    ];
  }
}

export class Thief extends Career {
  Description: string = "Thief";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Prowler"
    else if (this.Level == 2)
      return "Thief";
    else if (this.Level == 3)
      return "Master Thief";
    else if (this.Level == 4)
      return "Cat Burglar";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Brass 5";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Initiative, CharacteristicType.Agility, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Dexterity);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Strength);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Urban
    ];
  }
}

export class Witch extends Career {
  Description: string = "Witch";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Hexer"
    else if (this.Level == 2)
      return "Witch";
    else if (this.Level == 3)
      return "Wyrd";
    else if (this.Level == 4)
      return "Warlock";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 3";
    else if (this.Level == 4)
      return "Brass 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Channelling_Aqshy,
      SkillLibrary.Channelling_Azyr,
      SkillLibrary.Channelling_Chamon,
      SkillLibrary.Channelling_Dhar,
      SkillLibrary.Channelling_Ghur,
      SkillLibrary.Channelling_Ghyran,
      SkillLibrary.Channelling_Hysh,
      SkillLibrary.Channelling_Shyish,
      SkillLibrary.Channelling_Ulgu,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Intimidate,
      SkillLibrary.Language_Magick,
      SkillLibrary.SleightOfHand,
      SkillLibrary.Stealth_Rural
    ];
  }
}
// #endregion

// #region Warriors
export class Cavalryman extends Career {
  Description: string = "Cavalryman";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Horseman"
    else if (this.Level == 2)
      return "Cavalryman";
    else if (this.Level == 3)
      return "Cavalry Sergeant";
    else if (this.Level == 4)
      return "Cavalry Officer";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 2"
    else if (this.Level == 2)
      return "Silver 4";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.AnimalCare,
      SkillLibrary.CharmAnimal,
      SkillLibrary.Endurance,
      SkillLibrary.Language_BattleTongue,
      SkillLibrary.Melee_Basic,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception,
      SkillLibrary.Ride_Horse
    ];
  }
}

export class Guard extends Career {
  Description: string = "Guard";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Sentry"
    else if (this.Level == 2)
      return "Guard";
    else if (this.Level == 3)
      return "Honour Guard";
    else if (this.Level == 4)
      return "Guard Officer";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Strength);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Endurance,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Intuition,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Perception
    ];
  }
}

export class Knight extends Career {
  Description: string = "Knight";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Squire"
    else if (this.Level == 2)
      return "Knight";
    else if (this.Level == 3)
      return "First Knight";
    else if (this.Level == 4)
      return "Knight of the Inner Circle";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 3"
    else if (this.Level == 2)
      return "Silver 5";
    else if (this.Level == 3)
      return "Gold 2";
    else if (this.Level == 4)
      return "Gold 4";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.AnimalCare,
      SkillLibrary.CharmAnimal,
      SkillLibrary.Heal,
      SkillLibrary.Lore_Heraldry,
      SkillLibrary.Melee_Cavalry,
      SkillLibrary.Ride_Horse,
      SkillLibrary.Trade_Farrier
    ];
  }
}

export class PitFighter extends Career {
  Description: string = "Pit Fighter";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Pugilist"
    else if (this.Level == 2)
      return "Pit Fighter";
    else if (this.Level == 3)
      return "Pit Champion";
    else if (this.Level == 4)
      return "Pit Legend";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 4"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Toughness];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Agility);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gamble,
      SkillLibrary.Intimidate,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Melee_Cavalry,
      SkillLibrary.Melee_Fencing,
      SkillLibrary.Melee_Flail,
      SkillLibrary.Melee_Parry,
      SkillLibrary.Melee_PoleArm,
      SkillLibrary.Melee_TwoHanded
    ];
  }
}

export class Protagonist extends Career {
  Description: string = "Protagonist";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Braggart"
    else if (this.Level == 2)
      return "Protagonist";
    else if (this.Level == 3)
      return "Hitman";
    else if (this.Level == 4)
      return "Assassin";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 4";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.BallisticSkill);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Entertain_Taunt,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intimidate,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Melee_Cavalry,
      SkillLibrary.Melee_Fencing,
      SkillLibrary.Melee_Flail,
      SkillLibrary.Melee_Parry,
      SkillLibrary.Melee_PoleArm,
      SkillLibrary.Melee_TwoHanded
    ];
  }
}

export class Slayer extends Career {
  Description: string = "Slayer";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Troll Slayer"
    else if (this.Level == 2)
      return "Giant Slayer";
    else if (this.Level == 3)
      return "Dragon Slayer";
    else if (this.Level == 4)
      return "Daemon Slayer";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 2";
    else if (this.Level == 4)
      return "Brass 2";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Toughness);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Agility);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Initiative);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gamble,
      SkillLibrary.Heal,
      SkillLibrary.Lore_Trolls,
      SkillLibrary.Melee_Basic
    ];
  }
}

export class Soldier extends Career {
  Description: string = "Soldier";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Recruit"
    else if (this.Level == 2)
      return "Soldier";
    else if (this.Level == 3)
      return "Sergeant";
    else if (this.Level == 4)
      return "Officer";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Language_BattleTongue,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Play_Drum,
      SkillLibrary.Play_Fife
    ];
  }
}

export class WarriorPriest extends Career {
  Description: string = "Warrior Priest";
  Class: Class;
  get CareerPath(): string {
    if (this.Level == 1)
      return "Novitiate"
    else if (this.Level == 2)
      return "Warrior Priest";
    else if (this.Level == 3)
      return "Priest Sergeant";
    else if (this.Level == 4)
      return "Priest Captain";
    else
      return "";
  }
  set CareerPath(v: string) { };
  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Silver 4";
    else
      return "";
  }
  set Status(v: string) { };
  Skills: Skill[] = [];
  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Strength);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
      }
    }
    return characteristics;
  };
  set Characteristics(v: CharacteristicType[]) { };

  constructor() {
    super();
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Heal,
      SkillLibrary.Leadership,
      SkillLibrary.Lore_Theology,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Melee_Cavalry,
      SkillLibrary.Melee_Fencing,
      SkillLibrary.Melee_Flail,
      SkillLibrary.Melee_Parry,
      SkillLibrary.Melee_PoleArm,
      SkillLibrary.Melee_TwoHanded,
      SkillLibrary.Pray
    ];
  }
}
// #endregion

// #endregion
