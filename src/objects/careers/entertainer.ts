import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Rangers} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Entertainer extends Career {
  Description: string = "Entertainer";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Busker"
    else if (this.Level == 2)
      return "Entertainer";
    else if (this.Level == 3)
      return "Troubadour";
    else if (this.Level == 4)
      return "Troupe Leader";
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
    let characteristics = [CharacteristicType.Agility, CharacteristicType.Dexterity, CharacteristicType.Fellowship];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.WeaponSkill);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.BallisticSkill);
        if (this.Level > 3)
          characteristics.push(CharacteristicType.Toughness);
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
      SkillLibrary.Athletics,
      SkillLibrary.Charm,
      SkillLibrary.Entertain_Acting,
      SkillLibrary.Entertain_Comedy,
      SkillLibrary.Entertain_Singing,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gossip,
      SkillLibrary.Haggle,
      SkillLibrary.Perform_Acrobatics,
      SkillLibrary.Perform_Clowning,
      SkillLibrary.Perform_Dancing,
      SkillLibrary.Perform_Firebreathing,
      SkillLibrary.Perform_Juggling,
      SkillLibrary.Perform_Miming,
      SkillLibrary.Perform_RopeWalking,
      SkillLibrary.Play_Bagpipe,
      SkillLibrary.Play_Harpsichord,
      SkillLibrary.Play_Horn,
      SkillLibrary.Play_Lute,
      SkillLibrary.Play_Violin,
      SkillLibrary.SleightOfHand
    ];
  }
}
