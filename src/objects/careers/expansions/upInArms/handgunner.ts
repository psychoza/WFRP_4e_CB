import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class Handgunner extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Handgunner Recruit"
        else if (this.Level == 2)
            return "Handgunner";
        else if (this.Level == 3)
            return "Handgunner Sergeant";
        else if (this.Level == 4)
            return "Handgunner Captain";
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
        const characteristics = [CharacteristicType.BallisticSkill, CharacteristicType.Agility, CharacteristicType.Dexterity];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.Initiative);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Intelligence);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Willpower);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Handgunner";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Cool,
            SkillLibrary.Dodge,
            SkillLibrary.Endurance,
            SkillLibrary.Language_BattleTongue,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Perception,
            SkillLibrary.Play_Flute,
            SkillLibrary.Ranged_Blackpowder,
        ];
    }
}
