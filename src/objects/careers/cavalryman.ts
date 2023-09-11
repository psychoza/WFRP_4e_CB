import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Warriors} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Cavalryman extends Career {
  Description: string = "Cavalryman";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Horseman"
    else if (this.Level == 2)
      return "Cavalryman";
    else if (this.Level == 3)
      return "Cavalry Sergeant";
    else if (this.Level == 4)
      return "Cavalry Officer";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Silver 2"
    else if (this.Level == 2)
      return "Silver 4";
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
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
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
    this.Class = new Warriors();
    this.Skills = [
      SkillLibrary.AnimalCare,
      SkillLibrary.CharmAnimal,
      SkillLibrary.Endurance,
      SkillLibrary.Language_BattleTongue,
      SkillLibrary.Melee_Basic,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception,
      SkillLibrary.Ride_Horse
    ];
  }
}
