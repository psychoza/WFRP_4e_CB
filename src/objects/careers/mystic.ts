import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Peasants} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Mystic extends Career {
  Description: string = "Mystic";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Fortune Teller"
    else if (this.Level == 2)
      return "Mystic";
    else if (this.Level == 3)
      return "Sage";
    else if (this.Level == 4)
      return "Seer";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 3";
    else if (this.Level == 4)
      return "Brass 4";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Initiative, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
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
      SkillLibrary.Charm,
      SkillLibrary.Entertain_FortuneTelling,
      SkillLibrary.Dodge,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intuition,
      SkillLibrary.Perception,
      SkillLibrary.SleightOfHand
    ];
  }
}
