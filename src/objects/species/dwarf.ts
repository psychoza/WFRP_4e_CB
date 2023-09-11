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
import {Duelist} from "../careers/duelist";
import {Envoy} from "../careers/envoy";
import {Noble} from "../careers/noble";
import {Servant} from "../careers/servant";
import {Spy} from "../careers/spy";
import {Warden} from "../careers/warden";
import {Bailiff} from "../careers/bailiff";
import {Hunter} from "../careers/hunter";
import {Miner} from "../careers/miner";
import {Scout} from "../careers/scout";
import {Villager} from "../careers/villager";
import {BountyHunter} from "../careers/bountyHunter";
import {Coachman} from "../careers/coachman";
import {Entertainer} from "../careers/entertainer";
import {Messenger} from "../careers/messenger";
import {Pedlar} from "../careers/pedlar";
import {Boatman} from "../careers/boatman";
import {Huffer} from "../careers/huffer";
import {Riverwoman} from "../careers/riverwoman";
import {Seaman} from "../careers/seaman";
import {Smuggler} from "../careers/smuggler";
import {Stevedore} from "../careers/stevedore";
import {Wrecker} from "../careers/wrecker";
import {Fence} from "../careers/fence";
import {Outlaw} from "../careers/outlaw";
import {Racketeer} from "../careers/racketeer";
import {Thief} from "../careers/thief";
import {Guard} from "../careers/guard";
import {PitFighter} from "../careers/pitFighter";
import {Protagonist} from "../careers/protagonist";
import {Soldier} from "../careers/soldier";
import {Slayer} from "../careers/slayer";

export class Dwarf extends Species {
    Description: string = "Dwarf";
    WeaponSkill: number = 30;
    Toughness: number = 30;
    Agility: number = 10;
    Dexterity: number = 30;
    Willpower: number = 40;
    Fellowship: number = 10;

    Fate: number = 0;
    Resilience: number = 2;
    ExtraPoints: number = 2;
    Movement: number = 3;

    constructor() {
        super();
        this.AvailableCareers.push(new SpeciesClassCareer(new Apothecary(), 1, 1));
        this.AvailableCareers.push(new SpeciesClassCareer(new Engineer(), 2, 4));
        this.AvailableCareers.push(new SpeciesClassCareer(new Lawyer(), 5, 6));
        this.AvailableCareers.push(new SpeciesClassCareer(new Physician(), 7, 7));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(), 8, 9));
        this.AvailableCareers.push(new SpeciesClassCareer(new Agitator(), 10, 11));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(), 12, 17));
        this.AvailableCareers.push(new SpeciesClassCareer(new Beggar(), 18, 18));
        this.AvailableCareers.push(new SpeciesClassCareer(new Investigator(), 19, 20));
        this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(), 21, 24));
        this.AvailableCareers.push(new SpeciesClassCareer(new RatCatcher(), 25, 25));
        this.AvailableCareers.push(new SpeciesClassCareer(new Townsman(), 26, 31));
        this.AvailableCareers.push(new SpeciesClassCareer(new Watchman(), 32, 34));
        this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(), 35, 36));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artist(), 37, 37));
        this.AvailableCareers.push(new SpeciesClassCareer(new Duelist(), 38, 38));
        this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(), 39, 40));
        this.AvailableCareers.push(new SpeciesClassCareer(new Noble(), 41, 41));
        this.AvailableCareers.push(new SpeciesClassCareer(new Servant(), 42, 42));
        this.AvailableCareers.push(new SpeciesClassCareer(new Spy(), 43, 43));
        this.AvailableCareers.push(new SpeciesClassCareer(new Warden(), 44, 45));
        this.AvailableCareers.push(new SpeciesClassCareer(new Bailiff(), 46, 47));
        this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(), 48, 49));
        this.AvailableCareers.push(new SpeciesClassCareer(new Miner(), 50, 54));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scout(), 55, 55));
        this.AvailableCareers.push(new SpeciesClassCareer(new Villager(), 56, 56));
        this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(), 57, 60));
        this.AvailableCareers.push(new SpeciesClassCareer(new Coachman(), 61, 61));
        this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(), 62, 63));
        this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(), 64, 65));
        this.AvailableCareers.push(new SpeciesClassCareer(new Pedlar(), 66, 67));
        this.AvailableCareers.push(new SpeciesClassCareer(new Boatman(), 68, 69));
        this.AvailableCareers.push(new SpeciesClassCareer(new Huffer(), 70, 70));
        this.AvailableCareers.push(new SpeciesClassCareer(new Riverwoman(), 71, 72));
        this.AvailableCareers.push(new SpeciesClassCareer(new Seaman(), 73, 73));
        this.AvailableCareers.push(new SpeciesClassCareer(new Smuggler(), 74, 75));
        this.AvailableCareers.push(new SpeciesClassCareer(new Stevedore(), 76, 77));
        this.AvailableCareers.push(new SpeciesClassCareer(new Wrecker(), 78, 78));
        this.AvailableCareers.push(new SpeciesClassCareer(new Fence(), 79, 79));
        this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(), 80, 82));
        this.AvailableCareers.push(new SpeciesClassCareer(new Racketeer(), 83, 83));
        this.AvailableCareers.push(new SpeciesClassCareer(new Thief(), 84, 84));
        this.AvailableCareers.push(new SpeciesClassCareer(new Guard(), 85, 87));
        this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(), 88, 90));
        this.AvailableCareers.push(new SpeciesClassCareer(new Protagonist(), 91, 93));
        this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(), 94, 96));
        this.AvailableCareers.push(new SpeciesClassCareer(new Slayer(), 97, 100));
        this.Skills = [
            SkillLibrary.ConsumeAlcohol,
            SkillLibrary.Cool,
            SkillLibrary.Endurance,
            SkillLibrary.Entertain_Storytelling,
            SkillLibrary.Evaluate,
            SkillLibrary.Intimidate,
            SkillLibrary.Language_Khazalid,
            SkillLibrary.Lore_Dwarfs,
            SkillLibrary.Lore_Geology,
            SkillLibrary.Lore_Metallurgy,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Trade_Apothecary,
            SkillLibrary.Trade_Calligrapher,
            SkillLibrary.Trade_Carpenter,
            SkillLibrary.Trade_Chandler,
            SkillLibrary.Trade_Cook,
            SkillLibrary.Trade_Embalmer,
            SkillLibrary.Trade_Smith,
            SkillLibrary.Trade_Tanner
        ];
    }
}
