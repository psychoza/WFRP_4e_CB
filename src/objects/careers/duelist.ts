import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Courtiers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Duelist extends Career {
  Description: string = "Duelist";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Fencer"
    else if (this.Level == 2)
      return "Duelist";
    else if (this.Level == 3)
      return "Duelmaster";
    else if (this.Level == 4)
      return "Judicial Champion";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Silver 3"
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
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Strength);
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
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Heal,
      SkillLibrary.Intuition,
      SkillLibrary.Language_Classical,
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
