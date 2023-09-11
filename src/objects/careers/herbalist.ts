import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Peasants} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Herbalist extends Career {
  Description: string = "Herbalist";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Herb Gatherer"
    else if (this.Level == 2)
      return "Herbalist";
    else if (this.Level == 3)
      return "Herb Master";
    else if (this.Level == 4)
      return "Herbwise";
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
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Dexterity);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
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
      SkillLibrary.Lore_Herbs,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception,
      SkillLibrary.Swim,
      SkillLibrary.Trade_Herbalist
    ];
  }
}
