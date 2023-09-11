import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rangers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Coachman extends Career {
  Description: string = "Coachman";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Postilion"
    else if (this.Level == 2)
      return "Coachman";
    else if (this.Level == 3)
      return "Coach Master";
    else if (this.Level == 4)
      return "Route Master";
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
    let characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
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
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.AnimalCare,
      SkillLibrary.CharmAnimal,
      SkillLibrary.Climb,
      SkillLibrary.Drive,
      SkillLibrary.Endurance,
      SkillLibrary.Perception,
      SkillLibrary.Ranged_Entangling,
      SkillLibrary.Ride_Horse
    ];
  }
}
