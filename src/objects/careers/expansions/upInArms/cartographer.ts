import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {SkillLibrary} from "../../../skillLibrary";
import {Scholar} from "../../scholar";

export class Cartographer extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Surveyor"
        else if (this.Level == 2)
            return "Cartographer";
        else if (this.Level == 3)
            return "Chartered Cartographer";
        else if (this.Level == 4)
            return "Master Cartographer";
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
        const characteristics = [CharacteristicType.Initiative, CharacteristicType.Dexterity, CharacteristicType.Intelligence];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Agility);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.WeaponSkill);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Willpower);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Cartographer";
        this.Class = new Scholar();
        this.Skills = [
            SkillLibrary.Art_Cartography,
            SkillLibrary.Climb,
            SkillLibrary.Evaluate,
            SkillLibrary.Lore_Geography,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Navigation,
            SkillLibrary.OutdoorSurvival,
            SkillLibrary.Perception,
            SkillLibrary.Stealth_Rural,
            SkillLibrary.Trade_Cartographer,
        ];
    }
}
