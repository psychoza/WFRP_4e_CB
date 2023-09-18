import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class Archer extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Bowman"
        else if (this.Level == 2)
            return "Archer";
        else if (this.Level == 3)
            return "Archer Sergeant";
        else if (this.Level == 4)
            return "Archer Captain";
        else
            return "";
    }

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

    get Characteristics(): CharacteristicType[] {
        const characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Initiative, CharacteristicType.Agility];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Strength);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Toughness);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Intelligence);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Archer";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.Climb,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Perception,
            SkillLibrary.Play_Horn,
            SkillLibrary.Ranged_Bow,
            SkillLibrary.Stealth_Rural,
        ];
    }
}
