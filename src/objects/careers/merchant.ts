import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Burghers, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
