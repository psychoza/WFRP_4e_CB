import {SpeciesClassCareer} from "../speciesClassCareer";
import {SkillLibrary} from "../skillLibrary";
import {Species} from "../species";
import {Apothecary} from "../careers/apothecary";
import {Engineer} from "../careers/engineer";
import {Lawyer} from "../careers/lawyer";
import {Physician} from "../careers/physician";
import {Scholar} from "../careers/scholar";
import {Agitator} from "../careers/agitator";
import {Artisan} from "../careers/artisan";
import {Beggar} from "../careers/beggar";
import {Investigator} from "../careers/investigator";
import {Merchant} from "../careers/merchant";
import {RatCatcher} from "../careers/ratCatcher";
import {Townsman} from "../careers/townsman";
import {Watchman} from "../careers/watchman";
import {Advisor} from "../careers/advisor";
import {Artist} from "../careers/artist";
import {Envoy} from "../careers/envoy";
import {Servant} from "../careers/servant";
import {Spy} from "../careers/spy";
import {Warden} from "../careers/warden";
import {Bailiff} from "../careers/bailiff";
import {Herbalist} from "../careers/herbalist";
import {Hunter} from "../careers/hunter";
import {Miner} from "../careers/miner";
import {Scout} from "../careers/scout";
import {Villager} from "../careers/villager";
import {BountyHunter} from "../careers/bountyHunter";
import {Coachman} from "../careers/coachman";
import {Entertainer} from "../careers/entertainer";
import {Messenger} from "../careers/messenger";
import {Pedlar} from "../careers/pedlar";
import {RoadWarden} from "../careers/roadWarden";
import {Boatman} from "../careers/boatman";
import {Huffer} from "../careers/huffer";
import {Riverwarden} from "../careers/riverwarden";
import {Riverwoman} from "../careers/riverwoman";
import {Seaman} from "../careers/seaman";
import {Smuggler} from "../careers/smuggler";
import {Stevedore} from "../careers/stevedore";
import {Bawd} from "../careers/bawd";
import {Charlatan} from "../careers/charlatan";
import {Fence} from "../careers/fence";
import {GraveRobber} from "../careers/graveRobber";
import {Outlaw} from "../careers/outlaw";
import {Racketeer} from "../careers/racketeer";
import {Thief} from "../careers/thief";
import {Guard} from "../careers/guard";
import {PitFighter} from "../careers/pitFighter";
import {Soldier} from "../careers/soldier";

export class Halfling extends Species {
    Description: string = "Halfling";
    WeaponSkill: number = 10;
    BallisticSkill: number = 30;
    Strength: number = 10;
    Dexterity: number = 30;
    Willpower: number = 30;
    Fellowship: number = 30;

    Fate: number = 0;
    Resilience: number = 2;
    ExtraPoints: number = 3;
    Movement: number = 3;

    constructor() {
        super();
        this.AvailableCareers.push(new SpeciesClassCareer(new Apothecary(), 1, 1));
        this.AvailableCareers.push(new SpeciesClassCareer(new Engineer(), 2, 2));
        this.AvailableCareers.push(new SpeciesClassCareer(new Lawyer(), 3, 4));
        this.AvailableCareers.push(new SpeciesClassCareer(new Physician(), 5, 6));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(), 7, 8));
        this.AvailableCareers.push(new SpeciesClassCareer(new Agitator(), 9, 10));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(), 11, 15));
        this.AvailableCareers.push(new SpeciesClassCareer(new Beggar(), 16, 19));
        this.AvailableCareers.push(new SpeciesClassCareer(new Investigator(), 20, 21));
        this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(), 22, 25));
        this.AvailableCareers.push(new SpeciesClassCareer(new RatCatcher(), 26, 28));
        this.AvailableCareers.push(new SpeciesClassCareer(new Townsman(), 29, 31));
        this.AvailableCareers.push(new SpeciesClassCareer(new Watchman(), 32, 33));
        this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(), 34, 34));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artist(), 35, 36));
        this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(), 37, 37));
        this.AvailableCareers.push(new SpeciesClassCareer(new Servant(), 38, 43));
        this.AvailableCareers.push(new SpeciesClassCareer(new Spy(), 44, 44));
        this.AvailableCareers.push(new SpeciesClassCareer(new Warden(), 45, 46));
        this.AvailableCareers.push(new SpeciesClassCareer(new Bailiff(), 47, 47));
        this.AvailableCareers.push(new SpeciesClassCareer(new Herbalist(), 48, 50));
        this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(), 51, 52));
        this.AvailableCareers.push(new SpeciesClassCareer(new Miner(), 53, 53));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scout(), 54, 54));
        this.AvailableCareers.push(new SpeciesClassCareer(new Villager(), 55, 57));
        this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(), 58, 58));
        this.AvailableCareers.push(new SpeciesClassCareer(new Coachman(), 59, 60));
        this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(), 61, 63));
        this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(), 64, 65));
        this.AvailableCareers.push(new SpeciesClassCareer(new Pedlar(), 66, 67));
        this.AvailableCareers.push(new SpeciesClassCareer(new RoadWarden(), 68, 68));
        this.AvailableCareers.push(new SpeciesClassCareer(new Boatman(), 69, 69));
        this.AvailableCareers.push(new SpeciesClassCareer(new Huffer(), 70, 70));
        this.AvailableCareers.push(new SpeciesClassCareer(new Riverwarden(), 71, 71));
        this.AvailableCareers.push(new SpeciesClassCareer(new Riverwoman(), 72, 74));
        this.AvailableCareers.push(new SpeciesClassCareer(new Seaman(), 75, 75));
        this.AvailableCareers.push(new SpeciesClassCareer(new Smuggler(), 76, 79));
        this.AvailableCareers.push(new SpeciesClassCareer(new Stevedore(), 80, 82));
        this.AvailableCareers.push(new SpeciesClassCareer(new Bawd(), 83, 85));
        this.AvailableCareers.push(new SpeciesClassCareer(new Charlatan(), 86, 86));
        this.AvailableCareers.push(new SpeciesClassCareer(new Fence(), 87, 87));
        this.AvailableCareers.push(new SpeciesClassCareer(new GraveRobber(), 88, 88));
        this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(), 89, 89));
        this.AvailableCareers.push(new SpeciesClassCareer(new Racketeer(), 90, 90));
        this.AvailableCareers.push(new SpeciesClassCareer(new Thief(), 91, 94));
        this.AvailableCareers.push(new SpeciesClassCareer(new Guard(), 95, 96));
        this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(), 97, 97));
        this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(), 98, 100));
        this.Skills = [
            SkillLibrary.Charm,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Dodge,
            SkillLibrary.Gamble,
            SkillLibrary.Haggle,
            SkillLibrary.Intuition,
            SkillLibrary.Language_Mootish,
            SkillLibrary.Lore_Reikland,
            SkillLibrary.Perception,
            SkillLibrary.SleightOfHand,
            SkillLibrary.Stealth,
            SkillLibrary.Trade_Cook
        ];
    }

    GetWounds(strengthBonus: number, toughnessBonus: number, willpowerBonus: number): number {
        return (2 * toughnessBonus) + willpowerBonus;
    }
}
