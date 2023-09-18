import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class KnightOfTheWhiteWolf extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Novice"
        else if (this.Level == 2)
            return "Knight";
        else if (this.Level == 3)
            return "Template Sergeant";
        else if (this.Level == 4)
            return "Command Commander (Inner Circle)";
        else
            return "";
    }

    get Status(): string {
        if (this.Level == 1)
            return "Silver 3"
        else if (this.Level == 2)
            return "Silver 5";
        else if (this.Level == 3)
            return "Gold 2";
        else if (this.Level == 4)
            return "Gold 3";
        else
            return "";
    }

    get Characteristics(): CharacteristicType[] {
        const characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Strength, CharacteristicType.Initiative];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Agility);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Willpower);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Toughness);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Knight of the White Wolf";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.AnimalCare,
            SkillLibrary.Athletics,
            SkillLibrary.CharmAnimal,
            SkillLibrary.Heal,
            SkillLibrary.Lore_Heraldry,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_Cavalry,
            SkillLibrary.OutdoorSurvival,
            SkillLibrary.Ride_Horse,
            SkillLibrary.Trade_Farrier,
        ];
    }
}
