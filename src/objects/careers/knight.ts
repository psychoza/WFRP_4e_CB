import {Skill} from "../skill";
import {CharacteristicType} from "../characteristicType";
import {Class, Warriors} from "../class";
import {SkillLibrary} from "../skillLibrary";
import {Career} from "../career";

export class Knight extends Career {
    Description: string = "Knight";
    Class: Class;

    get CareerPath(): string {
        if (this.Level == 1)
            return "Squire"
        else if (this.Level == 2)
            return "Knight";
        else if (this.Level == 3)
            return "First Knight";
        else if (this.Level == 4)
            return "Knight of the Inner Circle";
        else
            return "";
    }

    set CareerPath(v: string) {
    };

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

    set Status(v: string) {
    };

    Skills: Skill[] = [];

    get Characteristics(): CharacteristicType[] {
        let characteristics = [CharacteristicType.Strength, CharacteristicType.Initiative, CharacteristicType.Agility];
        if (this.Level > 1) {
            characteristics.push(CharacteristicType.WeaponSkill);
            if (this.Level > 2) {
                characteristics.push(CharacteristicType.Willpower);
                if (this.Level > 3)
                    characteristics.push(CharacteristicType.Fellowship);
            }
        }
        return characteristics;
    };

    set Characteristics(v: CharacteristicType[]) {
    };

    constructor() {
        super();
        this.Class = new Warriors();
        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.AnimalCare,
            SkillLibrary.CharmAnimal,
            SkillLibrary.Heal,
            SkillLibrary.Lore_Heraldry,
            SkillLibrary.Melee_Cavalry,
            SkillLibrary.Ride_Horse,
            SkillLibrary.Trade_Farrier
        ];
    }
}
