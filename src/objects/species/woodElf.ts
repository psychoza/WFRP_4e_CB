import {SpeciesClassCareer} from "../speciesClassCareer";
import {SkillLibrary} from "../skillLibrary";
import {Species} from "../species";
import {Scholar} from "../careers/scholar";
import {Wizard} from "../careers/wizard";
import {Artisan} from "../careers/artisan";
import {Advisor} from "../careers/advisor";
import {Artist} from "../careers/artist";
import {Envoy} from "../careers/envoy";
import {Noble} from "../careers/noble";
import {Spy} from "../careers/spy";
import {Herbalist} from "../careers/herbalist";
import {Hunter} from "../careers/hunter";
import {Mystic} from "../careers/mystic";
import {Scout} from "../careers/scout";
import {BountyHunter} from "../careers/bountyHunter";
import {Entertainer} from "../careers/entertainer";
import {Messenger} from "../careers/messenger";
import {Wrecker} from "../careers/wrecker";
import {Outlaw} from "../careers/outlaw";
import {Cavalryman} from "../careers/cavalryman";
import {Guard} from "../careers/guard";
import {Knight} from "../careers/knight";
import {PitFighter} from "../careers/pitFighter";
import {Soldier} from "../careers/soldier";
import {Artillerist} from "../careers/expansions/upInArms/artillerist";
import {Cartographer} from "../careers/expansions/upInArms/cartographer";
import {CampFollower} from "../careers/expansions/upInArms/campFollower";
import {LightCavalryman} from "../careers/expansions/upInArms/lightCavalryman";
import {Archer} from "../careers/expansions/upInArms/archer";

export class WoodElf extends Species {
    Description: string = "Wood Elf";
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
        this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(), 1, 1));
        this.AvailableCareers.push(new SpeciesClassCareer(new Wizard(), 2, 5));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(), 6, 10));
        this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(), 11, 14));
        this.AvailableCareers.push(new SpeciesClassCareer(new Artist(), 15, 18));
        this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(), 19, 25));
        this.AvailableCareers.push(new SpeciesClassCareer(new Noble(), 26, 31));
        this.AvailableCareers.push(new SpeciesClassCareer(new Spy(), 32, 35));
        this.AvailableCareers.push(new SpeciesClassCareer(new Herbalist(), 36, 42));
        this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(), 43, 52));
        this.AvailableCareers.push(new SpeciesClassCareer(new Mystic(), 53, 57));
        this.AvailableCareers.push(new SpeciesClassCareer(new Scout(), 58, 68));
        this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(), 69, 70));
        this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(), 71, 75));
        this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(), 76, 78));
        this.AvailableCareers.push(new SpeciesClassCareer(new Wrecker(), 79, 79));
        this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(), 80, 85));
        this.AvailableCareers.push(new SpeciesClassCareer(new Cavalryman(), 86, 90));
        this.AvailableCareers.push(new SpeciesClassCareer(new Guard(), 91, 92));
        this.AvailableCareers.push(new SpeciesClassCareer(new Knight(), 93, 94));
        this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(), 95, 96));
        this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(), 97, 100));

        //
        //Expansions
        //

        //Up In Arms
        this.AvailableCareers.push(new SpeciesClassCareer(new Cartographer(), 0, 0));
        this.AvailableCareers.push(new SpeciesClassCareer(new CampFollower(), 0, 0));
        this.AvailableCareers.push(new SpeciesClassCareer(new LightCavalryman(), 0, 0));
        this.AvailableCareers.push(new SpeciesClassCareer(new Archer(), 0, 0));

        this.AvailableCareers.sort((a, b) => (a.Description < b.Description) ? -1 : 1);

        this.Skills = [
            SkillLibrary.Athletics,
            SkillLibrary.Climb,
            SkillLibrary.Endurance,
            SkillLibrary.Entertain_Singing,
            SkillLibrary.Intimidate,
            SkillLibrary.Language_Eltharin,
            SkillLibrary.Melee_Basic,
            SkillLibrary.OutdoorSurvival,
            SkillLibrary.Perception,
            SkillLibrary.Ranged_Bow,
            SkillLibrary.Stealth_Rural,
            SkillLibrary.Track
        ];
    }
}
