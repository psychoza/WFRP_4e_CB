import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rogues} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Witch extends Career {
  Description: string = "Witch";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Hexer"
    else if (this.Level == 2)
      return "Witch";
    else if (this.Level == 3)
      return "Wyrd";
    else if (this.Level == 4)
      return "Warlock";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 2";
    else if (this.Level == 3)
      return "Brass 3";
    else if (this.Level == 4)
      return "Brass 5";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Initiative);
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
    this.Class = new Rogues();
    this.Skills = [
      SkillLibrary.Channelling_Aqshy,
      SkillLibrary.Channelling_Azyr,
      SkillLibrary.Channelling_Chamon,
      SkillLibrary.Channelling_Dhar,
      SkillLibrary.Channelling_Ghur,
      SkillLibrary.Channelling_Ghyran,
      SkillLibrary.Channelling_Hysh,
      SkillLibrary.Channelling_Shyish,
      SkillLibrary.Channelling_Ulgu,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Intimidate,
      SkillLibrary.Language_Magick,
      SkillLibrary.SleightOfHand,
      SkillLibrary.Stealth_Rural
    ];
  }
}
