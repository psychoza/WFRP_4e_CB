import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class PriestOfMyrmidia extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "First Eagle"
        else if (this.Level == 2)
            return "Warrior Priest";
        else if (this.Level == 3)
            return "Priest Sergeant";
        else if (this.Level == 4)
            return "Priest Captain";
        else
            return "";
    }

    get Status(): string {
        if (this.Level == 1)
            return "Silver 2"
        else if (this.Level == 2)
            return "Silver 3";
        else if (this.Level == 3)
            return "Silver 4";
        else if (this.Level == 4)
            return "Silver 5";
        else
            return "";
    }

    get Characteristics(): CharacteristicType[] {
        const characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Intelligence, CharacteristicType.Fellowship];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Initiative);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Agility);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Strength);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Priest of Myrmidia";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Cool,
            SkillLibrary.Dodge,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Leadership,
            SkillLibrary.Lore_Warfare,
            SkillLibrary.Lore_Theology,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_PoleArm,
            SkillLibrary.Perception,
            SkillLibrary.Pray,
        ];
    }
}
