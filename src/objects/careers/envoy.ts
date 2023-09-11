import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Courtiers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
