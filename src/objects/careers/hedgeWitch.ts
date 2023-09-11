import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Peasants} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class HedgeWitch extends Career {
  Description: string = "Hedge Witch";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Hedge Apprentice"
    else if (this.Level == 2)
      return "Hedge Witch";
    else if (this.Level == 3)
      return "Hedge Master";
    else if (this.Level == 4)
      return "Hedgewise";
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
    let characteristics = [CharacteristicType.Toughness, CharacteristicType.Initiative, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Intelligence);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Fellowship);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Willpower);
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
      SkillLibrary.Channelling_Aqshy,
      SkillLibrary.Channelling_Azyr,
      SkillLibrary.Channelling_Chamon,
      SkillLibrary.Channelling_Dhar,
      SkillLibrary.Channelling_Ghur,
      SkillLibrary.Channelling_Ghyran,
      SkillLibrary.Channelling_Hysh,
      SkillLibrary.Channelling_Shyish,
      SkillLibrary.Channelling_Ulgu,
      SkillLibrary.Endurance,
      SkillLibrary.Intuition,
      SkillLibrary.Language_Magick,
      SkillLibrary.Lore_Folklore,
      SkillLibrary.Lore_Heraldry,
      SkillLibrary.OutdoorSurvival,
      SkillLibrary.Perception
    ];
  }
}
