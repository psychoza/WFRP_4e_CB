import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rogues} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Fence extends Career {
  Description: string = "Fence";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Broker"
    else if (this.Level == 2)
      return "Fence";
    else if (this.Level == 3)
      return "Master Fence";
    else if (this.Level == 4)
      return "Black Marketeer";
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
      return "Silver 4";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Initiative, CharacteristicType.Agility, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Dexterity);
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
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Evaluate,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Melee_Basic
    ];
  }
}
