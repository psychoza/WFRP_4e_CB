import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class LightCavalryman extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Reiver"
        else if (this.Level == 2)
            return "Light Cavalry";
        else if (this.Level == 3)
            return "Lance";
        else if (this.Level == 4)
            return "Captain";
        else
            return "";
    }

    get Status(): string {
        if (this.Level == 1)
            return "Brass 3"
        else if (this.Level == 2)
            return "Silver 2";
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
            characteristics.push(CharacteristicType.BallisticSkill);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Fellowship);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Intelligence);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Light Cavalryman";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.AnimalCare,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Haggle,
            SkillLibrary.Heal,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Melee_Basic,
            SkillLibrary.OutdoorSurvival,
            SkillLibrary.Ranged_Throwing,
            SkillLibrary.Ride_Horse,
        ];
    }
}
