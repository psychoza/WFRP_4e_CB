import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Peasants} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Scout extends Career {
  Description: string = "Scout";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Guide"
    else if (this.Level == 2)
      return "Scout";
    else if (this.Level == 3)
      return "Pathfinder";
    else if (this.Level == 4)
      return "Explorer";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 3"
    else if (this.Level == 2)
      return "Brass 5";
    else if (this.Level == 3)
      return "Silver 1";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.BallisticSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Intelligence);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Dexterity);
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
      SkillLibrary.Gossip,
      SkillLibrary.Lore_Local,
      SkillLibrary.Melee_Basic,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception
    ];
  }
}
