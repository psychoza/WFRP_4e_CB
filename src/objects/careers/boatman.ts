import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Riverfolk} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Boatman extends Career {
  Description: string = "Boatman";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Boat-hand"
    else if (this.Level == 2)
      return "Boatman";
    else if (this.Level == 3)
      return "Bargeswain";
    else if (this.Level == 4)
      return "Barge Master";
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
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Agility];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Dexterity);
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
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Melee_Basic,
      SkillLibrary.Row,
      SkillLibrary.Sail,
      SkillLibrary.Swim
    ];
  }
}
