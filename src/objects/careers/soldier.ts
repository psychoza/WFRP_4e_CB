import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Warriors} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Soldier extends Career {
    Description: string = "Soldier";
    Class: Class;

    get CareerPath(): string {
        if (this.Level == 1)
            return "Recruit"
        else if (this.Level == 2)
            return "Soldier";
        else if (this.Level == 3)
            return "Sergeant";
        else if (this.Level == 4)
            return "Officer";
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
            return "Gold 1";
        else
            return "";
    }

    set Status(v: string) {
    };

    Skills: Skill[] = [];

    get Characteristics(): CharacteristicType[] {
        let characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Willpower];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.BallisticSkill);
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
            SkillLibrary.Athletics,
            SkillLibrary.Climb,
            SkillLibrary.Cool,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Play_Drum,
            SkillLibrary.Play_Fife
        ];
    }
}
