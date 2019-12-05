import { Scholar, Outlaw, Merchant, Apothecary, Engineer, Lawyer, Physician, Agitator, Artisan, Artist, Advisor, Watchman, Townsman, RatCatcher, Investigator, Beggar, Wizard, Nun, Priest, Duelist, Envoy, Noble, Spy, Servant, Warden, Bailiff, HedgeWitch, Herbalist, Hunter, Miner, Mystic, Scout, Villager, BountyHunter, Coachman, Entertainer, Flagellant, Messenger, Pedlar, RoadWarden, WitchHunter, Boatman, Huffer, Riverwarden, Riverwoman, Seaman, Smuggler, Stevedore, Wrecker, Bawd, Charlatan, Fence, GraveRobber, Racketeer, Thief, Witch, Cavalryman, Guard, Knight, PitFighter, Protagonist, Soldier, Slayer, WarriorPriest } from './career';
import { SpeciesClassCareer } from './speciesClassCareer';
import { computedFrom } from "aurelia-binding";
import { Skill } from './skill';
import { SkillLibrary } from './skillLibrary';
import { Characteristic } from './characteristic';

export class Species {
  Description: string = "Not Specified";

  WeaponSkill: number = 20;
  BallisticSkill: number = 20;
  Strength: number = 20;
  Toughness: number = 20;
  Initiative: number = 20;
  Agility: number = 20;
  Dexterity: number = 20;
  Intelligence: number = 20;
  Willpower: number = 20;
  Fellowship: number = 20;
  Fate: number = 0;
  Resilience: number = 0;
  ExtraPoints: number = 0;
  Movement: number = 0;

  AvailableCareers:SpeciesClassCareer[] = [];

  Skills: Skill[] = [];
  
  GetWounds(strengthBonus: number, toughnessBonus: number, willpowerBonus: number): number {    
    return strengthBonus + (2 * toughnessBonus) + willpowerBonus;
  }

  constructor() {
  }
}

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

  constructor(){
    super();
    this.AvailableCareers.push(new SpeciesClassCareer(new Apothecary(),1,1));
    this.AvailableCareers.push(new SpeciesClassCareer(new Engineer(),2,4));
    this.AvailableCareers.push(new SpeciesClassCareer(new Lawyer(),5,6));
    this.AvailableCareers.push(new SpeciesClassCareer(new Physician(),7,7));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),8,9));
    this.AvailableCareers.push(new SpeciesClassCareer(new Agitator(),10,11));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(),12,17));
    this.AvailableCareers.push(new SpeciesClassCareer(new Beggar(),18,18));
    this.AvailableCareers.push(new SpeciesClassCareer(new Investigator(),19,20));
    this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(),21,24));
    this.AvailableCareers.push(new SpeciesClassCareer(new RatCatcher(),25,25));
    this.AvailableCareers.push(new SpeciesClassCareer(new Townsman(),26,31));
    this.AvailableCareers.push(new SpeciesClassCareer(new Watchman(),32,34));
    this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(),35,36));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artist(),37,37));
    this.AvailableCareers.push(new SpeciesClassCareer(new Duelist(),38,38));
    this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(),39,40));
    this.AvailableCareers.push(new SpeciesClassCareer(new Noble(),41,41));
    this.AvailableCareers.push(new SpeciesClassCareer(new Servant(),42,42));
    this.AvailableCareers.push(new SpeciesClassCareer(new Spy(),43,43));
    this.AvailableCareers.push(new SpeciesClassCareer(new Warden(),44,45));
    this.AvailableCareers.push(new SpeciesClassCareer(new Bailiff(),46,47));
    
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),48,100));
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

  constructor(){
    super();
    this.AvailableCareers.push(new SpeciesClassCareer(new Apothecary(),1,1));
    this.AvailableCareers.push(new SpeciesClassCareer(new Engineer(),2,2));
    this.AvailableCareers.push(new SpeciesClassCareer(new Lawyer(),3,4));
    this.AvailableCareers.push(new SpeciesClassCareer(new Physician(),5,6));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),7,8));
    this.AvailableCareers.push(new SpeciesClassCareer(new Agitator(),9,10));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(),11,15));
    this.AvailableCareers.push(new SpeciesClassCareer(new Beggar(),16,19));
    this.AvailableCareers.push(new SpeciesClassCareer(new Investigator(),20,21));
    this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(),22,25));
    this.AvailableCareers.push(new SpeciesClassCareer(new RatCatcher(),26,28));
    this.AvailableCareers.push(new SpeciesClassCareer(new Townsman(),29,31));
    this.AvailableCareers.push(new SpeciesClassCareer(new Watchman(),32,33));
    this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(),34,34));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artist(),35,36));
    this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(),37,37));
    this.AvailableCareers.push(new SpeciesClassCareer(new Servant(),38,43));
    this.AvailableCareers.push(new SpeciesClassCareer(new Spy(),44,44));
    this.AvailableCareers.push(new SpeciesClassCareer(new Warden(),45,46));
    this.AvailableCareers.push(new SpeciesClassCareer(new Bailiff(),47,47));

    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),48,100));
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

  constructor(){
    super();
    this.AvailableCareers.push(new SpeciesClassCareer(new Apothecary(),1,2));
    this.AvailableCareers.push(new SpeciesClassCareer(new Lawyer(),3,6));
    this.AvailableCareers.push(new SpeciesClassCareer(new Physician(),7,8));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),9,12));
    this.AvailableCareers.push(new SpeciesClassCareer(new Wizard(),13,16));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(),17,19));
    this.AvailableCareers.push(new SpeciesClassCareer(new Investigator(),20,21));
    this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(),22,26));
    this.AvailableCareers.push(new SpeciesClassCareer(new Townsman(),27,28));
    this.AvailableCareers.push(new SpeciesClassCareer(new Watchman(),29,29));
    this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(),30,31));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artist(),32,32));
    this.AvailableCareers.push(new SpeciesClassCareer(new Duelist(),33,34));
    this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(),35,37));
    this.AvailableCareers.push(new SpeciesClassCareer(new Noble(),38,40));
    this.AvailableCareers.push(new SpeciesClassCareer(new Spy(),41,43));
    this.AvailableCareers.push(new SpeciesClassCareer(new Warden(),44,45));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),46,47));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),48,50));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),51,56));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),57,59));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),60,62));

    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),63,100));
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

export class Human extends Species {
  Description: string = "Human";
  Fate: number = 2;
  Resilience: number = 1;
  ExtraPoints: number = 3;
  Movement: number = 4;

  constructor(){
    super();
    this.AvailableCareers.push(new SpeciesClassCareer(new Apothecary(),1,1));
    this.AvailableCareers.push(new SpeciesClassCareer(new Engineer(),2,2));
    this.AvailableCareers.push(new SpeciesClassCareer(new Lawyer(),3,3));
    this.AvailableCareers.push(new SpeciesClassCareer(new Nun(),4,5));
    this.AvailableCareers.push(new SpeciesClassCareer(new Physician(),6,6));
    this.AvailableCareers.push(new SpeciesClassCareer(new Priest(),7,11));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),12,13));
    this.AvailableCareers.push(new SpeciesClassCareer(new Wizard(),14,14));
    this.AvailableCareers.push(new SpeciesClassCareer(new Agitator(),15,15));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(),16,17));
    this.AvailableCareers.push(new SpeciesClassCareer(new Beggar(),18,19));
    this.AvailableCareers.push(new SpeciesClassCareer(new Investigator(),20,20));
    this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(),21,21));
    this.AvailableCareers.push(new SpeciesClassCareer(new RatCatcher(),22,23));
    this.AvailableCareers.push(new SpeciesClassCareer(new Townsman(),24,26));
    this.AvailableCareers.push(new SpeciesClassCareer(new Watchman(),27,27));
    this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(),28,28));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artist(),29,29));
    this.AvailableCareers.push(new SpeciesClassCareer(new Duelist(),30,30));
    this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(),31,31));
    this.AvailableCareers.push(new SpeciesClassCareer(new Noble(),32,32));
    this.AvailableCareers.push(new SpeciesClassCareer(new Servant(),33,35));
    this.AvailableCareers.push(new SpeciesClassCareer(new Spy(),36,36));
    this.AvailableCareers.push(new SpeciesClassCareer(new Warden(),37,37));
    this.AvailableCareers.push(new SpeciesClassCareer(new Bailiff(),38,38));
    this.AvailableCareers.push(new SpeciesClassCareer(new HedgeWitch(),39,39));

    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),40,100));
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

  constructor(){
    super();
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,1));;
    this.AvailableCareers.push(new SpeciesClassCareer(new Wizard(),2,5));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artisan(),6,10));
    this.AvailableCareers.push(new SpeciesClassCareer(new Advisor(),11,14));
    this.AvailableCareers.push(new SpeciesClassCareer(new Artist(),15,18));
    this.AvailableCareers.push(new SpeciesClassCareer(new Envoy(),19,25));
    this.AvailableCareers.push(new SpeciesClassCareer(new Noble(),26,31));
    this.AvailableCareers.push(new SpeciesClassCareer(new Spy(),32,35));   

    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),36,100));
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
