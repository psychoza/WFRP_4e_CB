import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Academics} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class Artillerist extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Apprentice Artillerist"
        else if (this.Level == 2)
            return "Artillerist";
        else if (this.Level == 3)
            return "Artillerist Captain";
        else if (this.Level == 4)
            return "Master Artillerist";
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
        const characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Initiative, CharacteristicType.Intelligence];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Toughness);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Willpower);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Agility);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Artillerist";
        this.Class = new Academics();
        this.Skills = [
            SkillLibrary.AnimalCare,
            SkillLibrary.Cool,
            SkillLibrary.Drive,
            SkillLibrary.Endurance,
            SkillLibrary.Evaluate,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Navigation,
            SkillLibrary.Perception,
            SkillLibrary.Ranged_Blackpowder,
            SkillLibrary.Ranged_Catapult,
            SkillLibrary.Ranged_Crossbow,
        ];
    }
}
