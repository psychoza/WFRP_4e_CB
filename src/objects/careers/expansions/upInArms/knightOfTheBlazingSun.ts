import {Career} from "../../../career";
import {CharacteristicType} from "../../../characteristicType";
import {Warriors} from "../../../class";
import {SkillLibrary} from "../../../skillLibrary";

export class KnightOfTheBlazingSun extends Career {

    get CareerPath(): string {
        if (this.Level == 1)
            return "Novice"
        else if (this.Level == 2)
            return "Knight";
        else if (this.Level == 3)
            return "Hochmeister";
        else if (this.Level == 4)
            return "Knight of the Inner Circle";
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
            characteristics.push(CharacteristicType.Intelligence);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Agility);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Fellowship);
            }
        }
        return characteristics;
    }

    constructor() {
        super();
        this.Description = "Knight of the Blazing Sun";
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.AnimalCare,
            SkillLibrary.Athletics,
            SkillLibrary.CharmAnimal,
            SkillLibrary.Heal,
            SkillLibrary.Language_Classical,
            SkillLibrary.Lore,
            SkillLibrary.Lore_Heraldry,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Melee_Cavalry,
            SkillLibrary.Ride_Horse,
        ];
    }
}
