import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Riverfolk} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Wrecker extends Career {
  Description: string = "Wrecker";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Cargo Scavenger"
    else if (this.Level == 2)
      return "Wrecker";
    else if (this.Level == 3)
      return "River Pirate";
    else if (this.Level == 4)
      return "Wrecker Captain";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 3";
    else if (this.Level == 3)
      return "Brass 5";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Initiative];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.BallisticSkill);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Fellowship);
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
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Row,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Swim
    ];
  }
}
