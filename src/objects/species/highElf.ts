import {SpeciesClassCareer} from "../speciesClassCareer";
import {SkillLibrary} from "../skillLibrary";
import {Species} from "../species";
import {Apothecary} from "../careers/apothecary";
import {Lawyer} from "../careers/lawyer";
import {Physician} from "../careers/physician";
import {Scholar} from "../careers/scholar";
import {Wizard} from "../careers/wizard";
import {Artisan} from "../careers/artisan";
import {Investigator} from "../careers/investigator";
import {Merchant} from "../careers/merchant";
import {Townsman} from "../careers/townsman";
import {Watchman} from "../careers/watchman";
import {Advisor} from "../careers/advisor";
import {Artist} from "../careers/artist";
import {Duelist} from "../careers/duelist";
import {Envoy} from "../careers/envoy";
import {Noble} from "../careers/noble";
import {Spy} from "../careers/spy";
import {Warden} from "../careers/warden";
import {Herbalist} from "../careers/herbalist";
import {Hunter} from "../careers/hunter";
import {Scout} from "../careers/scout";
import {BountyHunter} from "../careers/bountyHunter";
import {Entertainer} from "../careers/entertainer";
import {Messenger} from "../careers/messenger";
import {Boatman} from "../careers/boatman";
import {Seaman} from "../careers/seaman";
import {Smuggler} from "../careers/smuggler";
import {Bawd} from "../careers/bawd";
import {Charlatan} from "../careers/charlatan";
import {Outlaw} from "../careers/outlaw";
import {Cavalryman} from "../careers/cavalryman";
import {Guard} from "../careers/guard";
import {Knight} from "../careers/knight";
import {PitFighter} from "../careers/pitFighter";
import {Protagonist} from "../careers/protagonist";
import {Soldier} from "../careers/soldier";
import {Artillerist} from "../careers/expansions/upInArms/artillerist";
import {Cartographer} from "../careers/expansions/upInArms/cartographer";
import {CampFollower} from "../careers/expansions/upInArms/campFollower";
import {LightCavalryman} from "../careers/expansions/upInArms/lightCavalryman";
import {Archer} from "../careers/expansions/upInArms/archer";
import {SiegeSpecialist} from "../careers/expansions/upInArms/siegeSpecialist";

export class HighElf extends Species {
    Description: string = "High Elf";
    WeaponSkill: number = 30;
    BallisticSkill: number = 30;
    Initiative: number = 40;
    Agility: number = 30;
    Dexterity: number = 30;
    Intelligence: number = 30;
    Willpower: number = 30;

    Fate: number = 0;
    Resilience: number = 0;
    ExtraPoints: number = 2;
    Movement: number = 5;

    constructor() {
        super();
        this.AvailableCareers.push(new SpeciesClassCareer(new Apothecary(), 1, 2));
        this.AvailableCareers.push(new SpeciesClassCareer(new Lawyer(), 3, 6));
        this.AvailableCareers.push(new SpeciesClassCareer(new Physician(), 7, 8));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(), 9, 12));
        this.AvailableCareers.push(new SpeciesClassCareer(new Wizard(), 13, 16));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(), 17, 19));
        this.AvailableCareers.push(new SpeciesClassCareer(new Investigator(), 20, 21));
        this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(), 22, 26));
        this.AvailableCareers.push(new SpeciesClassCareer(new Townsman(), 27, 28));
        this.AvailableCareers.push(new SpeciesClassCareer(new Watchman(), 29, 29));
        this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(), 30, 31));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artist(), 32, 32));
        this.AvailableCareers.push(new SpeciesClassCareer(new Duelist(), 33, 34));
        this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(), 35, 37));
        this.AvailableCareers.push(new SpeciesClassCareer(new Noble(), 38, 40));
        this.AvailableCareers.push(new SpeciesClassCareer(new Spy(), 41, 43));
        this.AvailableCareers.push(new SpeciesClassCareer(new Warden(), 44, 45));
        this.AvailableCareers.push(new SpeciesClassCareer(new Herbalist(), 46, 47));
        this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(), 48, 50));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scout(), 51, 56));
        this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(), 57, 59));
        this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(), 60, 62));
        this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(), 63, 63));
        this.AvailableCareers.push(new SpeciesClassCareer(new Boatman(), 64, 64));
        this.AvailableCareers.push(new SpeciesClassCareer(new Seaman(), 65, 79));
        this.AvailableCareers.push(new SpeciesClassCareer(new Smuggler(), 80, 80));
        this.AvailableCareers.push(new SpeciesClassCareer(new Bawd(), 81, 82));
        this.AvailableCareers.push(new SpeciesClassCareer(new Charlatan(), 83, 85));
        this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(), 86, 88));
        this.AvailableCareers.push(new SpeciesClassCareer(new Cavalryman(), 89, 92));
        this.AvailableCareers.push(new SpeciesClassCareer(new Guard(), 93, 94));
        this.AvailableCareers.push(new SpeciesClassCareer(new Knight(), 95, 95));
        this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(), 96, 97));
        this.AvailableCareers.push(new SpeciesClassCareer(new Protagonist(), 98, 98));
        this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(), 99, 100));

        //
        //Expansions
        //

        //Up In Arms
        this.AvailableCareers.push(new SpeciesClassCareer(new Artillerist(), 0, 0));
        this.AvailableCareers.push(new SpeciesClassCareer(new Cartographer(), 0, 0));
        this.AvailableCareers.push(new SpeciesClassCareer(new CampFollower(), 0, 0));
        this.AvailableCareers.push(new SpeciesClassCareer(new LightCavalryman(), 0, 0));
        this.AvailableCareers.push(new SpeciesClassCareer(new Archer(), 0, 0));
        this.AvailableCareers.push(new SpeciesClassCareer(new SiegeSpecialist(), 0, 0));

        this.AvailableCareers.sort((a, b) => (a.Description < b.Description) ? -1 : 1);

        this.Skills = [
            SkillLibrary.Cool,
            SkillLibrary.Entertain_Singing,
            SkillLibrary.Evaluate,
            SkillLibrary.Language_Eltharin,
            SkillLibrary.Leadership,
            SkillLibrary.Melee_Basic,
            SkillLibrary.Navigation,
            SkillLibrary.Perception,
            SkillLibrary.SleightOfHand,
            SkillLibrary.Stealth,
            SkillLibrary.Trade_Cook
        ];
    }
}
