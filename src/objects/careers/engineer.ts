import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Academics, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Engineer extends Career {
  Description: string = "Engineer";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Student Engineer"
    else if (this.Level == 2)
      return "Engineer";
    else if (this.Level == 3)
      return "Master Engineer";
    else if (this.Level == 4)
      return "Chartered Engineer";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 4"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 4";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.BallisticSkill, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Toughness);
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
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Language_Classical,
      SkillLibrary.Lore_Engineering,
      SkillLibrary.Perception,
      SkillLibrary.Ranged_Blackpowder,
      SkillLibrary.Trade_Engineer
    ];
  }
}
