import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Warriors} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Protagonist extends Career {
    Description: string = "Protagonist";
    Class: Class;

    get CareerPath(): string {
        if (this.Level == 1)
            return "Braggart"
        else if (this.Level == 2)
            return "Protagonist";
        else if (this.Level == 3)
            return "Hitman";
        else if (this.Level == 4)
            return "Assassin";
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
            return "Silver 4";
        else if (this.Level == 4)
            return "Gold 1";
        else
            return "";
    }

    set Status(v: string) {
    };

    Skills: Skill[] = [];

    get Characteristics(): CharacteristicType[] {
        let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Agility];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Initiative);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.BallisticSkill);
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
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Entertain_Taunt,
            SkillLibrary.Gossip,
            SkillLibrary.Haggle,
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
