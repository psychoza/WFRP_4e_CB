import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Warriors} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Slayer extends Career {
    Description: string = "Slayer";
    Class: Class;

    get CareerPath(): string {
        if (this.Level == 1)
            return "Troll Slayer"
        else if (this.Level == 2)
            return "Giant Slayer";
        else if (this.Level == 3)
            return "Dragon Slayer";
        else if (this.Level == 4)
            return "Daemon Slayer";
        else
            return "";
    }

    set CareerPath(v: string) {
    };

    get Status(): string {
        if (this.Level == 1)
            return "Brass 2"
        else if (this.Level == 2)
            return "Brass 2";
        else if (this.Level == 3)
            return "Brass 2";
        else if (this.Level == 4)
            return "Brass 2";
        else
            return "";
    }

    set Status(v: string) {
    };

    Skills: Skill[] = [];

    get Characteristics(): CharacteristicType[] {
        let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Willpower];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Toughness);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Agility);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Initiative);
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
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Cool,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Gamble,
            SkillLibrary.Heal,
            SkillLibrary.Lore_Trolls,
            SkillLibrary.Melee_Basic
        ];
    }
}
