import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class Halberdier extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Halberdier Recruit"
        else if (this.Level == 2)
            return "Halberdier";
        else if (this.Level == 3)
            return "Halberdier Sergeant";
        else if (this.Level == 4)
            return "Halberdier Captain";
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
        const characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Toughness, CharacteristicType.Agility];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Strength);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Initiative);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Intelligence);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Halberdier";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Cool,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_PoleArm,
            SkillLibrary.Perform_Parade,
            SkillLibrary.Play_Drum,
        ];
    }
}
