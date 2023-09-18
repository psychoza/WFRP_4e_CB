import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Rangers} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class CampFollower extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Ribaud"
        else if (this.Level == 2)
            return "Camp Follower";
        else if (this.Level == 3)
            return "Seasoned Scavenger";
        else if (this.Level == 4)
            return "Camp Chief";
        else
            return "";
    }

    get Status(): string {
        if (this.Level == 1)
            return "Brass 1"
        else if (this.Level == 2)
            return "Brass 4";
        else if (this.Level == 3)
            return "Silver 1";
        else if (this.Level == 4)
            return "Silver 4";
        else
            return "";
    }

    get Characteristics(): CharacteristicType[] {
        const characteristics = [CharacteristicType.WeaponSkill, CharacteristicType.Agility, CharacteristicType.Fellowship];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Intelligence);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Initiative);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Toughness);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Camp Follower";
        this.Class = new Rangers();
        this.Skills = [
            SkillLibrary.Charm,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Dodge,
            SkillLibrary.Entertain,
            SkillLibrary.Gossip,
            SkillLibrary.Haggle,
            SkillLibrary.Melee,
            SkillLibrary.OutdoorSurvival,
            SkillLibrary.Perception,
            SkillLibrary.Perform_Dancing,
        ];
    }
}
