import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rangers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Messenger extends Career {
  Description: string = "Messenger";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Runner"
    else if (this.Level == 2)
      return "Messenger";
    else if (this.Level == 3)
      return "Courier";
    else if (this.Level == 4)
      return "Courier-Captain";
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
      return "Silver 5";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
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
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Navigation,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Perception
    ];
  }
}
