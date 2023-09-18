import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class SiegeSpecialist extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Crossbowman"
        else if (this.Level == 2)
            return "Siege Specialist";
        else if (this.Level == 3)
            return "Sapper";
        else if (this.Level == 4)
            return "Siege Master";
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
        const characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.BallisticSkill, CharacteristicType.Strength];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Agility);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Initiative);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Fellowship);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Siege Specialist";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.Climb,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Endurance,
            SkillLibrary.Gamble,
            SkillLibrary.Gossip,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Melee_Basic,
            SkillLibrary.OutdoorSurvival,
            SkillLibrary.Ranged_Crossbow,
        ];
    }
}
