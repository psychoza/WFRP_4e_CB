// #region Rangers
import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rangers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class BountyHunter extends Career {
  Description: string = "Bounty Hunter";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Thief-taker"
    else if (this.Level == 2)
      return "Bounty Hunter";
    else if (this.Level == 3)
      return "Master Bounty Hunter";
    else if (this.Level == 4)
      return "Bounty Hunter General";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Strength);
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
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.Charm,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intuition,
      SkillLibrary.Melee_Basic,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception
    ];
  }
}
