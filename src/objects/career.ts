import { Characteristic } from './characteristic';
import { Skill, ISkill } from "./skill";
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
  CareerPath: string = "";
  Status: string = "";
  Skills: Skill[] = [];
  Characteristics: CharacteristicType[] = [];
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
// #endregion

// #region Peasants
// #endregion

// #region Rangers
// #endregion

// #region Riverfolk
// #endregion

// #region Rogues
export class Outlaw extends Career {
  Description: string = "Outlaw";
  Class: Rogues;
  constructor() {
    super();
    this.Class = new Rogues();
  }
}
// #endregion

// #region Warriors
// #endregion

// #endregion




// export class CAREER extends Career {
//   Description: string = "";
//   Class: Class;
//   get CareerPath(): string {
//     if (this.Level == 1)
//       return ""
//     else if (this.Level == 2)
//       return "";
//     else if (this.Level == 3)
//       return "";
//     else if (this.Level == 4)
//       return "";
//     else
//       return "";
//   }
//   set CareerPath(v: string) { };
//   get Status(): string {
//     if (this.Level == 1)
//       return ""
//     else if (this.Level == 2)
//       return "";
//     else if (this.Level == 3)
//       return "";
//     else if (this.Level == 4)
//       return "";
//     else
//       return "";
//   }
//   set Status(v: string) { };
//   Skills: Skill[] = [];
//   get Characteristics(): CharacteristicType[] {
//     let characteristics = [CharacteristicType., CharacteristicType., CharacteristicType.];
//     if (this.Level > 1) {
//       characteristics.push(CharacteristicType.);
//       if (this.Level > 2) {
//         characteristics.push(CharacteristicType.);
//         if (this.Level > 3)
//           characteristics.push(CharacteristicType.);
//       }
//     }
//     return characteristics;
//   };
//   set Characteristics(v: CharacteristicType[]) { };

//   constructor() {
//     super();
//     this.Class = new ();
//     this.Skills = [
//       SkillLibrary.,
//       SkillLibrary.,
//       SkillLibrary.,
//       SkillLibrary.,
//       SkillLibrary.,
//       SkillLibrary.,
//       SkillLibrary.,
//       SkillLibrary.
//     ];
//   }
// }
