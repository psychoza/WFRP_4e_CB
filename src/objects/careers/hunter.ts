import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Peasants} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Hunter extends Career {
  Description: string = "Hunter";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Trapper"
    else if (this.Level == 2)
      return "Hunter";
    else if (this.Level == 3)
      return "Tracker";
    else if (this.Level == 4)
      return "Huntsmaster";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 3";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
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
    this.Class = new Peasants();
    this.Skills = [
      SkillLibrary.CharmAnimal,
      SkillLibrary.Climb,
      SkillLibrary.Endurance,
      SkillLibrary.Lore_Beasts,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception,
      SkillLibrary.Ranged_Bow,
      SkillLibrary.SetTrap
    ];
  }
}
