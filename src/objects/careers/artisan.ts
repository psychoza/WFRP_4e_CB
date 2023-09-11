import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Burghers, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Artisan extends Career {
  Description: string = "Artisan";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Apprentice Artisan"
    else if (this.Level == 2)
      return "Artisan";
    else if (this.Level == 3)
      return "Master Artisan";
    else if (this.Level == 4)
      return "Guildmaster";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 2"
    else if (this.Level == 2)
      return "Silver 1";
    else if (this.Level == 3)
      return "Silver 3";
    else if (this.Level == 4)
      return "Gold 1";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Toughness, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Fellowship);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Willpower);
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
    this.Class = new Burghers();
    this.Skills = [
      SkillLibrary.Athletics,
      SkillLibrary.Cool,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Dodge,
      SkillLibrary.Endurance,
      SkillLibrary.Evaluate,
      SkillLibrary.Stealth_Urban,
      SkillLibrary.Trade_Apothecary,
      SkillLibrary.Trade_Calligrapher,
      SkillLibrary.Trade_Carpenter,
      SkillLibrary.Trade_Chandler,
      SkillLibrary.Trade_Cook,
      SkillLibrary.Trade_Embalmer,
      SkillLibrary.Trade_Engineer,
      SkillLibrary.Trade_Poisoner,
      SkillLibrary.Trade_Printing,
      SkillLibrary.Trade_Smith,
      SkillLibrary.Trade_Tanner
    ];
  }
}
