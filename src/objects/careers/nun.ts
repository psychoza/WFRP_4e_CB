import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Academics, Class} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Nun extends Career {
  Description: string = "Nun";
  Class: Class;

  get CareerPath(): string {
    if (this.Level == 1)
      return "Novitiate"
    else if (this.Level == 2)
      return "Nun";
    else if (this.Level == 3)
      return "Abbess";
    else if (this.Level == 4)
      return "Prioress General";
    else
      return "";
  }

  set CareerPath(v: string) {
  };

  get Status(): string {
    if (this.Level == 1)
      return "Brass 1"
    else if (this.Level == 2)
      return "Brass 4";
    else if (this.Level == 3)
      return "Silver 2";
    else if (this.Level == 4)
      return "Silver 5";
    else
      return "";
  }

  set Status(v: string) {
  };

  Skills: Skill[] = [];

  get Characteristics(): CharacteristicType[] {
    let characteristics = [CharacteristicType.Intelligence, CharacteristicType.Fellowship, CharacteristicType.Dexterity];
    if (this.Level > 1) {
      characteristics.push(CharacteristicType.Willpower);
      if (this.Level > 2) {
        characteristics.push(CharacteristicType.Initiative);
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
    this.Class = new Academics();
    this.Skills = [
      SkillLibrary.Art_Calligraphy,
      SkillLibrary.Cool,
      SkillLibrary.Endurance,
      SkillLibrary.Entertain_Storytelling,
      SkillLibrary.Gossip,
      SkillLibrary.Heal,
      SkillLibrary.Lore_Theology,
      SkillLibrary.Pray
    ];
  }
}
