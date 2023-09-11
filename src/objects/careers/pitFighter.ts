import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Warriors} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class PitFighter extends Career {
    Description: string = "Pit Fighter";
    Class: Class;

    get CareerPath(): string {
        if (this.Level == 1)
            return "Pugilist"
        else if (this.Level == 2)
            return "Pit Fighter";
        else if (this.Level == 3)
            return "Pit Champion";
        else if (this.Level == 4)
            return "Pit Legend";
        else
            return "";
    }

    set CareerPath(v: string) {
    };

    get Status(): string {
        if (this.Level == 1)
            return "Brass 4"
        else if (this.Level == 2)
            return "Silver 2";
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
        let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Toughness];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Initiative);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Agility);
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
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.Cool,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Gamble,
            SkillLibrary.Intimidate,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_Brawling,
            SkillLibrary.Melee_Cavalry,
            SkillLibrary.Melee_Fencing,
            SkillLibrary.Melee_Flail,
            SkillLibrary.Melee_Parry,
            SkillLibrary.Melee_PoleArm,
            SkillLibrary.Melee_TwoHanded
        ];
    }
}
