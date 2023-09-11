import {SpeciesClassCareer} from "../speciesClassCareer";
import {SkillLibrary} from "../skillLibrary";
import {Species} from "../species";
import {Apothecary} from "../careers/apothecary";
import {Engineer} from "../careers/engineer";
import {Lawyer} from "../careers/lawyer";
import {Nun} from "../careers/nun";
import {Physician} from "../careers/physician";
import {Priest} from "../careers/priest";
import {Scholar} from "../careers/scholar";
import {Wizard} from "../careers/wizard";
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
import {Duelist} from "../careers/duelist";
import {Envoy} from "../careers/envoy";
import {Noble} from "../careers/noble";
import {Servant} from "../careers/servant";
import {Spy} from "../careers/spy";
import {Warden} from "../careers/warden";
import {Bailiff} from "../careers/bailiff";
import {HedgeWitch} from "../careers/hedgeWitch";
import {Herbalist} from "../careers/herbalist";
import {Hunter} from "../careers/hunter";
import {Miner} from "../careers/miner";
import {Mystic} from "../careers/mystic";
import {Scout} from "../careers/scout";
import {Villager} from "../careers/villager";
import {BountyHunter} from "../careers/bountyHunter";
import {Coachman} from "../careers/coachman";
import {Entertainer} from "../careers/entertainer";
import {Flagellant} from "../careers/flagellant";
import {Messenger} from "../careers/messenger";
import {Pedlar} from "../careers/pedlar";
import {RoadWarden} from "../careers/roadWarden";
import {WitchHunter} from "../careers/witchHunter";
import {Boatman} from "../careers/boatman";
import {Huffer} from "../careers/huffer";
import {Riverwarden} from "../careers/riverwarden";
import {Riverwoman} from "../careers/riverwoman";
import {Seaman} from "../careers/seaman";
import {Smuggler} from "../careers/smuggler";
import {Stevedore} from "../careers/stevedore";
import {Wrecker} from "../careers/wrecker";
import {Bawd} from "../careers/bawd";
import {Charlatan} from "../careers/charlatan";
import {Fence} from "../careers/fence";
import {GraveRobber} from "../careers/graveRobber";
import {Outlaw} from "../careers/outlaw";
import {Racketeer} from "../careers/racketeer";
import {Thief} from "../careers/thief";
import {Witch} from "../careers/witch";
import {Cavalryman} from "../careers/cavalryman";
import {Guard} from "../careers/guard";
import {Knight} from "../careers/knight";
import {PitFighter} from "../careers/pitFighter";
import {Protagonist} from "../careers/protagonist";
import {Soldier} from "../careers/soldier";
import {WarriorPriest} from "../careers/warriorPriest";

export class Human extends Species {
    Description: string = "Human";
    Fate: number = 2;
    Resilience: number = 1;
    ExtraPoints: number = 3;
    Movement: number = 4;

    constructor() {
        super();
        this.AvailableCareers.push(new SpeciesClassCareer(new Apothecary(), 1, 1));
        this.AvailableCareers.push(new SpeciesClassCareer(new Engineer(), 2, 2));
        this.AvailableCareers.push(new SpeciesClassCareer(new Lawyer(), 3, 3));
        this.AvailableCareers.push(new SpeciesClassCareer(new Nun(), 4, 5));
        this.AvailableCareers.push(new SpeciesClassCareer(new Physician(), 6, 6));
        this.AvailableCareers.push(new SpeciesClassCareer(new Priest(), 7, 11));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(), 12, 13));
        this.AvailableCareers.push(new SpeciesClassCareer(new Wizard(), 14, 14));
        this.AvailableCareers.push(new SpeciesClassCareer(new Agitator(), 15, 15));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(), 16, 17));
        this.AvailableCareers.push(new SpeciesClassCareer(new Beggar(), 18, 19));
        this.AvailableCareers.push(new SpeciesClassCareer(new Investigator(), 20, 20));
        this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(), 21, 21));
        this.AvailableCareers.push(new SpeciesClassCareer(new RatCatcher(), 22, 23));
        this.AvailableCareers.push(new SpeciesClassCareer(new Townsman(), 24, 26));
        this.AvailableCareers.push(new SpeciesClassCareer(new Watchman(), 27, 27));
        this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(), 28, 28));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artist(), 29, 29));
        this.AvailableCareers.push(new SpeciesClassCareer(new Duelist(), 30, 30));
        this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(), 31, 31));
        this.AvailableCareers.push(new SpeciesClassCareer(new Noble(), 32, 32));
        this.AvailableCareers.push(new SpeciesClassCareer(new Servant(), 33, 35));
        this.AvailableCareers.push(new SpeciesClassCareer(new Spy(), 36, 36));
        this.AvailableCareers.push(new SpeciesClassCareer(new Warden(), 37, 37));
        this.AvailableCareers.push(new SpeciesClassCareer(new Bailiff(), 38, 38));
        this.AvailableCareers.push(new SpeciesClassCareer(new HedgeWitch(), 39, 39));
        this.AvailableCareers.push(new SpeciesClassCareer(new Herbalist(), 40, 40));
        this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(), 41, 42));
        this.AvailableCareers.push(new SpeciesClassCareer(new Miner(), 43, 43));
        this.AvailableCareers.push(new SpeciesClassCareer(new Mystic(), 44, 44));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scout(), 45, 45));
        this.AvailableCareers.push(new SpeciesClassCareer(new Villager(), 46, 50));
        this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(), 51, 51));
        this.AvailableCareers.push(new SpeciesClassCareer(new Coachman(), 52, 52));
        this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(), 53, 54));
        this.AvailableCareers.push(new SpeciesClassCareer(new Flagellant(), 55, 56));
        this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(), 57, 57));
        this.AvailableCareers.push(new SpeciesClassCareer(new Pedlar(), 58, 58));
        this.AvailableCareers.push(new SpeciesClassCareer(new RoadWarden(), 59, 59));
        this.AvailableCareers.push(new SpeciesClassCareer(new WitchHunter(), 60, 60));
        this.AvailableCareers.push(new SpeciesClassCareer(new Boatman(), 61, 62));
        this.AvailableCareers.push(new SpeciesClassCareer(new Huffer(), 63, 63));
        this.AvailableCareers.push(new SpeciesClassCareer(new Riverwarden(), 64, 65));
        this.AvailableCareers.push(new SpeciesClassCareer(new Riverwoman(), 66, 68));
        this.AvailableCareers.push(new SpeciesClassCareer(new Seaman(), 69, 70));
        this.AvailableCareers.push(new SpeciesClassCareer(new Smuggler(), 71, 71));
        this.AvailableCareers.push(new SpeciesClassCareer(new Stevedore(), 72, 73));
        this.AvailableCareers.push(new SpeciesClassCareer(new Wrecker(), 74, 74));
        this.AvailableCareers.push(new SpeciesClassCareer(new Bawd(), 75, 76));
        this.AvailableCareers.push(new SpeciesClassCareer(new Charlatan(), 77, 77));
        this.AvailableCareers.push(new SpeciesClassCareer(new Fence(), 78, 78));
        this.AvailableCareers.push(new SpeciesClassCareer(new GraveRobber(), 79, 79));
        this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(), 80, 83));
        this.AvailableCareers.push(new SpeciesClassCareer(new Racketeer(), 84, 84));
        this.AvailableCareers.push(new SpeciesClassCareer(new Thief(), 85, 87));
        this.AvailableCareers.push(new SpeciesClassCareer(new Witch(), 88, 88));
        this.AvailableCareers.push(new SpeciesClassCareer(new Cavalryman(), 89, 90));
        this.AvailableCareers.push(new SpeciesClassCareer(new Guard(), 91, 92));
        this.AvailableCareers.push(new SpeciesClassCareer(new Knight(), 93, 93));
        this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(), 94, 94));
        this.AvailableCareers.push(new SpeciesClassCareer(new Protagonist(), 95, 95));
        this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(), 96, 99));
        this.AvailableCareers.push(new SpeciesClassCareer(new WarriorPriest(), 100, 100));
        this.Skills = [
            SkillLibrary.AnimalCare,
            SkillLibrary.Charm,
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Cool,
            SkillLibrary.Evaluate,
            SkillLibrary.Gossip,
            SkillLibrary.Language_Bretonnian,
            SkillLibrary.Language_Wastelander,
            SkillLibrary.Leadership,
            SkillLibrary.Lore_Reikland,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Ranged_Bow
        ];
    }
}
