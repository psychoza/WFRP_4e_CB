import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class KnightPanther extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Squire"
        else if (this.Level == 2)
            return "Knight";
        else if (this.Level == 3)
            return "First Knight";
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
            return "Gold 4";
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
                    characteristics.push(CharacteristicType.Fellowship);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Knight Panther";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.AnimalCare,
            SkillLibrary.Athletics,
            SkillLibrary.CharmAnimal,
            SkillLibrary.Heal,
            SkillLibrary.Lore_Empire,
            SkillLibrary.Lore_Heraldry,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_Cavalry,
            SkillLibrary.Ride_Horse,
            SkillLibrary.Trade_Farrier,
        ];
    }
}
