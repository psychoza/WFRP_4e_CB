import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Courtiers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
