import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rogues} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
