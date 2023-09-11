import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rogues} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Bawd extends Career {
  Description: string = "Bawd";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Hustler"
    else if (this.Level == 2)
      return "Bawd";
    else if (this.Level == 3)
      return "Procurer";
    else if (this.Level == 4)
      return "Ringleader";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 3";
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
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
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
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Entertain_Acting,
      SkillLibrary.Entertain_Comedy,
      SkillLibrary.Entertain_Singing,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Intimidate
    ];
  }
}
