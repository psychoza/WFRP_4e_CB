import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Riverfolk} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Seaman extends Career {
  Description: string = "Seaman";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Landsman"
    else if (this.Level == 2)
      return "Seaman";
    else if (this.Level == 3)
      return "Boatswain";
    else if (this.Level == 4)
      return "Ship's Master";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Silver 1"
    else if (this.Level == 2)
      return "Silver 3";
    else if (this.Level == 3)
      return "Silver 5";
    else if (this.Level == 4)
      return "Gold 2";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
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
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Climb,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Gamble,
      SkillLibrary.Gossip,
      SkillLibrary.Row,
      SkillLibrary.Melee_Brawling,
      SkillLibrary.Sail,
      SkillLibrary.Swim
    ];
  }
}
