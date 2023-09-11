import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rogues} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
