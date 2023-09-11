import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Burghers, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Investigator extends Career {
  Description: string = "Investigator";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Sleuth"
    else if (this.Level == 2)
      return "Investigator";
    else if (this.Level == 3)
      return "Master Investigator";
    else if (this.Level == 4)
      return "Detective";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 2";
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
    let characteristics = [CharacteristicType.Initiative, CharacteristicType.Agility, CharacteristicType.Intelligence];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Dexterity);
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
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.Climb,
      SkillLibrary.Cool,
      SkillLibrary.Gossip,
      SkillLibrary.Intuition,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Urban,
      SkillLibrary.Track
    ];
  }
}
