import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Riverfolk} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
