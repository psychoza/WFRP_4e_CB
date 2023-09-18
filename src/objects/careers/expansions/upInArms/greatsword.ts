import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class Greatsword extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Greatsword Cadet"
        else if (this.Level == 2)
            return "Greatsword";
        else if (this.Level == 3)
            return "Greatsword Sergeant";
        else if (this.Level == 4)
            return "Greatsword Captain";
        else
            return "";
    }

    get Status(): string {
        if (this.Level == 1)
            return "Silver 1"
        else if (this.Level == 2)
            return "Silver 4";
        else if (this.Level == 3)
            return "Gold 1";
        else if (this.Level == 4)
            return "Gold 2";
        else
            return "";
    }

    get Characteristics(): CharacteristicType[] {
        const characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Willpower];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Initiative);
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
        this.Description = "Greatsword";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Cool,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Gossip,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_TwoHanded,
            SkillLibrary.Play_Drum,
        ];
    }
}
