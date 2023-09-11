import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Warriors} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class WarriorPriest extends Career {
    Description: string = "Warrior Priest";
    Class: Class;

    get CareerPath(): string {
        if (this.Level == 1)
            return "Novitiate"
        else if (this.Level == 2)
            return "Warrior Priest";
        else if (this.Level == 3)
            return "Priest Sergeant";
        else if (this.Level == 4)
            return "Priest Captain";
        else
            return "";
    }

    set CareerPath(v: string) {
    };

    get Status(): string {
        if (this.Level == 1)
            return "Brass 2"
        else if (this.Level == 2)
            return "Silver 2";
        else if (this.Level == 3)
            return "Silver 3";
        else if (this.Level == 4)
            return "Silver 4";
        else
            return "";
    }

    set Status(v: string) {
    };

    Skills: Skill[] = [];

    get Characteristics(): CharacteristicType[] {
        let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Strength);
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
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Cool,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Heal,
            SkillLibrary.Leadership,
            SkillLibrary.Lore_Theology,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_Brawling,
            SkillLibrary.Melee_Cavalry,
            SkillLibrary.Melee_Fencing,
            SkillLibrary.Melee_Flail,
            SkillLibrary.Melee_Parry,
            SkillLibrary.Melee_PoleArm,
            SkillLibrary.Melee_TwoHanded,
            SkillLibrary.Pray
        ];
    }
}
