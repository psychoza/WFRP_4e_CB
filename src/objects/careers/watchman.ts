import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Burghers, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Watchman extends Career {
  Description: string = "Watchman";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Watch Recruit"
    else if (this.Level == 2)
      return "Watchman";
    else if (this.Level == 3)
      return "Watch Sergeant";
    else if (this.Level == 4)
      return "Watch Captain";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
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
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gamble,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Melee_Cavalry,
      SkillLibrary.Melee_Fencing,
      SkillLibrary.Melee_Flail,
      SkillLibrary.Melee_Parry,
      SkillLibrary.Melee_PoleArm,
      SkillLibrary.Melee_TwoHanded,
      SkillLibrary.Perception
    ];
  }
}
