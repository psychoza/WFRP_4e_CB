import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Burghers, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class RatCatcher extends Career {
  Description: string = "Rat Catcher";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Rat Hunter"
    else if (this.Level == 2)
      return "Rat Catcher";
    else if (this.Level == 3)
      return "Sewer Jack";
    else if (this.Level == 4)
      return "Exterminator";
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
      return "Silver 2";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.BallisticSkill, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Toughness);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Strength);
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
      SkillLibrary.Athletics,
      SkillLibrary.AnimalTraining_Dog,
      SkillLibrary.CharmAnimal,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Endurance,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Ranged_Sling,
      SkillLibrary.Stealth_Underground,
      SkillLibrary.Stealth_Urban
    ];
  }
}
