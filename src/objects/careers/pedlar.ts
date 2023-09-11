import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rangers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Pedlar extends Career {
  Description: string = "Pedlar";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Vagabond"
    else if (this.Level == 2)
      return "Pedlar";
    else if (this.Level == 3)
      return "Master Pedlar";
    else if (this.Level == 4)
      return "Wandering Trader";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Dexterity, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
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
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.Endurance,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intuition,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Stealth_Rural,
      SkillLibrary.Stealth_Urban
    ];
  }
}
