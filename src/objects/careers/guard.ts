import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Warriors} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Guard extends Career {
    Description: string = "Guard";
    Class: Class;

    get CareerPath(): string {
        if (this.Level == 1)
            return "Sentry"
        else if (this.Level == 2)
            return "Guard";
        else if (this.Level == 3)
            return "Honour Guard";
        else if (this.Level == 4)
            return "Guard Officer";
        else
            return "";
    }

    set CareerPath(v: string) {
    };

    get Status(): string {
        if (this.Level == 1)
            return "Silver 1"
        else if (this.Level == 2)
            return "Silver 2";
        else if (this.Level == 3)
            return "Silver 3";
        else if (this.Level == 4)
            return "Silver 5";
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
                characteristics.push(CharacteristicType.Strength);
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
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Endurance,
            SkillLibrary.Entertain_Storytelling,
            SkillLibrary.Gamble,
            SkillLibrary.Gossip,
            SkillLibrary.Intuition,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Perception
        ];
    }
}
