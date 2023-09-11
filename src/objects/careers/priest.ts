import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Academics, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Priest extends Career {
  Description: string = "Priest";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Initiate"
    else if (this.Level == 2)
      return "Priest";
    else if (this.Level == 3)
      return "High Priest";
    else if (this.Level == 4)
      return "Lector";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Silver 1";
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
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Agility, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
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
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Lore_Theology,
      SkillLibrary.Perception,
      SkillLibrary.Pray,
      SkillLibrary.Research
    ];
  }
}
