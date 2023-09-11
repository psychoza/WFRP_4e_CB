import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Courtiers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
