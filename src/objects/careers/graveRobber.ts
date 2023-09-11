import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rogues} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class GraveRobber extends Career {
  Description: string = "Grave Robber";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Body Snatcher"
    else if (this.Level == 2)
      return "Grave Robber";
    else if (this.Level == 3)
      return "Tomb Robber";
    else if (this.Level == 4)
      return "Treasure Hunter";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Initiative, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Dexterity);
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
      SkillLibrary.Climb,
      SkillLibrary.Cool,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Intuition,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Rural,
      SkillLibrary.Stealth_Underground,
      SkillLibrary.Stealth_Urban
    ];
  }
}
