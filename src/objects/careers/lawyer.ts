import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Academics, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Lawyer extends Career {
  Description: string = "Lawyer";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Student Lawyer"
    else if (this.Level == 2)
      return "Lawyer";
    else if (this.Level == 3)
      return "Barrister";
    else if (this.Level == 4)
      return "Judge";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 4"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Gold 1";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.Initiative, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Toughness);
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
      SkillLibrary.Endurance,
      SkillLibrary.Haggle,
      SkillLibrary.Language_Classical,
      SkillLibrary.Lore_Law,
      SkillLibrary.Lore_Theology,
      SkillLibrary.Perception,
      SkillLibrary.Research
    ];
  }
}
