import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rangers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class RoadWarden extends Career {
  Description: string = "Road Warden";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Toll Keeper"
    else if (this.Level == 2)
      return "Road Warden";
    else if (this.Level == 3)
      return "Road Sergeant";
    else if (this.Level == 4)
      return "Road Captain";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 5"
    else if (this.Level == 2)
      return "Silver 2";
    else if (this.Level == 3)
      return "Silver 4";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Toughness, CharacteristicType.Initiative];
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
    this.Class = new Rangers();
    this.Skills = [
      SkillLibrary.Bribery,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Perception,
      SkillLibrary.Ranged_Crossbow
    ];
  }
}
