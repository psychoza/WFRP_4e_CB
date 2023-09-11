import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Riverfolk} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Riverwoman extends Career {
  Description: string = "Riverwoman";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Greenfish"
    else if (this.Level == 2)
      return "Riverwoman";
    else if (this.Level == 3)
      return "Riverwise";
    else if (this.Level == 4)
      return "River Elder";
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
      return "Brass 5";
    else if (this.Level == 4)
      return "Silver 2";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Agility, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
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
    this.Class = new Riverfolk();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Row,
      SkillLibrary.Swim
    ];
  }
}
