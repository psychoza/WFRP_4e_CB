import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Burghers, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Agitator extends Career {
  Description: string = "Agitator";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Pamphleteer"
    else if (this.Level == 2)
      return "Agitator";
    else if (this.Level == 3)
      return "Rabble Rouser";
    else if (this.Level == 4)
      return "Demagogue";
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
      return "Brass 5";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Intelligence, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Agility);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.WeaponSkill);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Initiative);
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
      SkillLibrary.Art_Writing,
      SkillLibrary.Bribery,
      SkillLibrary.Charm,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Lore_Plants,
      SkillLibrary.Trade_Printing
    ];
  }
}
