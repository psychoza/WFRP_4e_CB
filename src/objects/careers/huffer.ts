import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Riverfolk} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
