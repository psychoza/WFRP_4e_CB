import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Courtiers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Noble extends Career {
  Description: string = "Noble";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Scion"
    else if (this.Level == 2)
      return "Noble";
    else if (this.Level == 3)
      return "Magnate";
    else if (this.Level == 4)
      return "Noble Lord";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Gold 1"
    else if (this.Level == 2)
      return "Gold 3";
    else if (this.Level == 3)
      return "Gold 5";
    else if (this.Level == 4)
      return "Gold 7";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Initiative, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
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
      SkillLibrary.Bribery,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gamble,
      SkillLibrary.Intimidate,
      SkillLibrary.Leadership,
      SkillLibrary.Lore_Heraldry,
      SkillLibrary.Melee_Fencing,
      SkillLibrary.Play_Bagpipe,
      SkillLibrary.Play_Harpsichord,
      SkillLibrary.Play_Horn,
      SkillLibrary.Play_Lute,
      SkillLibrary.Play_Violin
    ];
  }
}
