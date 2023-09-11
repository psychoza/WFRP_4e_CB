// #region Peasants
import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Peasants} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Bailiff extends Career {
  Description: string = "Bailiff";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Tax Collector"
    else if (this.Level == 2)
      return "Bailiff";
    else if (this.Level == 3)
      return "Reeve";
    else if (this.Level == 4)
      return "Magistrate";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
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
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Initiative, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Agility);
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
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intimidate,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Perception
    ];
  }
}
