import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class Pikeman extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Recruit"
        else if (this.Level == 2)
            return "Pikeman";
        else if (this.Level == 3)
            return "File Leader";
        else if (this.Level == 4)
            return "Banner Captain";
        else
            return "";
    }

    get Status(): string {
        if (this.Level == 1)
            return "Brass 5"
        else if (this.Level == 2)
            return "Silver 1";
        else if (this.Level == 3)
            return "Silver 4";
        else if (this.Level == 4)
            return "Gold 1";
        else
            return "";
    }

    get Characteristics(): CharacteristicType[] {
        const characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Toughness];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Initiative);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Willpower);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Fellowship);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Pikeman";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.Climb,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Gamble,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Language_Tilean,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_PoleArm,
        ];
    }
}
