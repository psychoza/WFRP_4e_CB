import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rangers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Flagellant extends Career {
  Description: string = "Flagellant";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Zealot"
    else if (this.Level == 2)
      return "Flagellant";
    else if (this.Level == 3)
      return "Penitent";
    else if (this.Level == 4)
      return "Prophet of Doom";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 0"
    else if (this.Level == 2)
      return "Brass 0";
    else if (this.Level == 3)
      return "Brass 0";
    else if (this.Level == 4)
      return "Brass 0";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Toughness];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
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
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Heal,
      SkillLibrary.Intimidate,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Sigmar,
      SkillLibrary.Melee_Flail,
      SkillLibrary.OutdoorSurvival
    ];
  }
}
