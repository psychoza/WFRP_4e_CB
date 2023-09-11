import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Peasants} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Villager extends Career {
  Description: string = "Villager";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Peasant"
    else if (this.Level == 2)
      return "Villager";
    else if (this.Level == 3)
      return "Councillor";
    else if (this.Level == 4)
      return "Village Elder";
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
      return "Brass 4";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
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
      SkillLibrary.AnimalCare,
      SkillLibrary.Athletics,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Lore_Local,
      SkillLibrary.OutdoorSurvival
    ];
  }
}
