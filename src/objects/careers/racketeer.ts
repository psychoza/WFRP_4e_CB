import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rogues} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Racketeer extends Career {
  Description: string = "Racketeer";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Thug"
    else if (this.Level == 2)
      return "Racketeer";
    else if (this.Level == 3)
      return "Gang Boss";
    else if (this.Level == 4)
      return "Crime Lord";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Brass 5";
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
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Toughness];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Intelligence);
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
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Intimidate,
      SkillLibrary.Lore_Local,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Stealth_Urban
    ];
  }
}
