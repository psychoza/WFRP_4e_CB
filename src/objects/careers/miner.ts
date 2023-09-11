import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Peasants} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Miner extends Career {
  Description: string = "Miner";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Prospector"
    else if (this.Level == 2)
      return "Miner";
    else if (this.Level == 3)
      return "Master Miner";
    else if (this.Level == 4)
      return "Mine Foreman";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Brass 5";
    else if (this.Level == 4)
      return "Silver 4";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
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
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Local,
      SkillLibrary.Melee_TwoHanded,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception,
      SkillLibrary.Swim
    ];
  }
}
