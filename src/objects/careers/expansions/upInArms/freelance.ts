import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class Freelance extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Squire"
        else if (this.Level == 2)
            return "Freelance Knight";
        else if (this.Level == 3)
            return "Freelance Captain";
        else if (this.Level == 4)
            return "Knight Commander";
        else
            return "";
    }

    get Status(): string {
        if (this.Level == 1)
            return "Silver 1"
        else if (this.Level == 2)
            return "Silver 2";
        else if (this.Level == 3)
            return "Gold 1";
        else if (this.Level == 4)
            return "Gold 3";
        else
            return "";
    }

    get Characteristics(): CharacteristicType[] {
        const characteristics = [CharacteristicType.Strength, CharacteristicType.Initiative, CharacteristicType.Agility];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.WeaponSkill);
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
        this.Description = "Freelance";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.AnimalCare,
            SkillLibrary.Athletics,
            SkillLibrary.CharmAnimal,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Heal,
            SkillLibrary.Gossip,
            SkillLibrary.Melee_Cavalry,
            SkillLibrary.OutdoorSurvival,
            SkillLibrary.Ride_Horse,
            SkillLibrary.Trade_Farrier,
        ];
    }
}
