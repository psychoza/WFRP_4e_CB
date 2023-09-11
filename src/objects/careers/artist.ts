import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Courtiers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Artist extends Career {
  Description: string = "Artist";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Apprentice Artist"
    else if (this.Level == 2)
      return "Artist";
    else if (this.Level == 3)
      return "Master Artist";
    else if (this.Level == 4)
      return "Maestro";
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
    let characteristics = [CharacteristicType.Strength, CharacteristicType.Initiative, CharacteristicType.Dexterity];
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
    this.Class = new Courtiers();
    this.Skills = [
      SkillLibrary.Art_Calligraphy,
      SkillLibrary.Art_Cartography,
      SkillLibrary.Art_Engraving,
      SkillLibrary.Art_Mosaics,
      SkillLibrary.Art_Painting,
      SkillLibrary.Art_Sculpture,
      SkillLibrary.Art_Tattoo,
      SkillLibrary.Art_Weaving,
      SkillLibrary.Art_Writing,
      SkillLibrary.Cool,
      SkillLibrary.ConsumeAlcohol,
      SkillLibrary.Evaluate,
      SkillLibrary.Endurance,
      SkillLibrary.Gossip,
      SkillLibrary.Perception,
      SkillLibrary.Stealth_Urban
    ];
  }
}
