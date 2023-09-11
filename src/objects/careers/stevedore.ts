import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Riverfolk} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Stevedore extends Career {
  Description: string = "Stevedore";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Dockhand"
    else if (this.Level == 2)
      return "Stevedore";
    else if (this.Level == 3)
      return "Foreman";
    else if (this.Level == 4)
      return "Dock Master";
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
      return "Silver 5";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Initiative];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Strength);
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
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Swim
    ];
  }
}
