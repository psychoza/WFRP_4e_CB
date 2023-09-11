import {Skill} from '../skill';
import {CharacteristicType} from '../characteristicType';
import {Academics, Class} from '../class';
import {SkillLibrary} from '../skillLibrary';
import {Career} from '../career';

export class Apothecary extends Career {
  Description: string = "Apothecary";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Apprentice"
    else if (this.Level == 2)
      return "Apothecary";
    else if (this.Level == 3)
      return "Master Apothecary";
    else if (this.Level == 4)
      return "Apothecary-General";
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
      return "Gold 1";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.Toughness, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
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
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Heal,
      SkillLibrary.Language_Classical,
      SkillLibrary.Lore_Chemistry,
      SkillLibrary.Lore_Medicine,
      SkillLibrary.Lore_Plants,
      SkillLibrary.Trade_Apothecary,
      SkillLibrary.Trade_Poisoner,
      SkillLibrary.Research
    ];
  }
}
