import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Academics, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

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

  set CareerPath(v: string) {
  };

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

  set Status(v: string) {
  };

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

  set Characteristics(v: CharacteristicType[]) {
  };

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
