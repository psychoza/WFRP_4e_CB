import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Riverfolk} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Riverwarden extends Career {
  Description: string = "Riverwarden";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "River Recruit"
    else if (this.Level == 2)
      return "Riverwarden";
    else if (this.Level == 3)
      return "Shipsword";
    else if (this.Level == 4)
      return "Shipsword Master";
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
      return "Silver 4";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Strength, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
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
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Perception,
      SkillLibrary.Row,
      SkillLibrary.Sail,
      SkillLibrary.Swim
    ];
  }
}
