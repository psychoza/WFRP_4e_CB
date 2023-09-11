import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rogues} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Charlatan extends Career {
  Description: string = "Charlatan";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Swindler"
    else if (this.Level == 2)
      return "Charlatan";
    else if (this.Level == 3)
      return "Con Artist";
    else if (this.Level == 4)
      return "Scoundrel";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Brass 5";
    else if (this.Level == 3)
      return "Silver 2";
    else if (this.Level == 4)
      return "Silver 4";
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
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Charm,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.SleightOfHand
    ];
  }
}
