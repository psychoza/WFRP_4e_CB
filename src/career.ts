import { Characteristic } from './characteristic';
import { Skill, ISkill } from "./skill";
import { SkillLibrary } from './skillLibrary';

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
  CareerPath: string = "";
  Status: string = "";
  Skills: Skill[] = [];
  Characteristics: CharacteristicType[] = [];
}
// #region Academics
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
// #endregion

export class Outlaw extends Career {
  Description: string = "Outlaw";
  Class: Rogues;
  constructor() {
    super();
    this.Class = new Rogues();
  }
}
// #endregion
