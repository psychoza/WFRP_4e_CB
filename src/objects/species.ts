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
    this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(),48,49));
    this.AvailableCareers.push(new SpeciesClassCareer(new Miner(),50,54));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scout(),55,55));
    this.AvailableCareers.push(new SpeciesClassCareer(new Villager(),56,56));
    this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(),57,60));
    this.AvailableCareers.push(new SpeciesClassCareer(new Coachman(),61,61));
    this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(),62,63));
    this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(),64,65));
    this.AvailableCareers.push(new SpeciesClassCareer(new Pedlar(),66,67));
    this.AvailableCareers.push(new SpeciesClassCareer(new Boatman(),68,69));
    this.AvailableCareers.push(new SpeciesClassCareer(new Huffer(),70,70));
    this.AvailableCareers.push(new SpeciesClassCareer(new Riverwoman(),71,72));
    this.AvailableCareers.push(new SpeciesClassCareer(new Seaman(),73,73));
    this.AvailableCareers.push(new SpeciesClassCareer(new Smuggler(),74,75));
    this.AvailableCareers.push(new SpeciesClassCareer(new Stevedore(),76,77));
    this.AvailableCareers.push(new SpeciesClassCareer(new Wrecker(),78,78));
    this.AvailableCareers.push(new SpeciesClassCareer(new Fence(),79,79));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),80,82));
    this.AvailableCareers.push(new SpeciesClassCareer(new Racketeer(),83,83));
    this.AvailableCareers.push(new SpeciesClassCareer(new Thief(),84,84));
    this.AvailableCareers.push(new SpeciesClassCareer(new Guard(),85,87));
    this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(),88,90));
    this.AvailableCareers.push(new SpeciesClassCareer(new Protagonist(),91,93));
    this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(),94,96));
    this.AvailableCareers.push(new SpeciesClassCareer(new Slayer(),97,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Herbalist(),48,50));
    this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(),51,52));
    this.AvailableCareers.push(new SpeciesClassCareer(new Miner(),53,53));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scout(),54,54));
    this.AvailableCareers.push(new SpeciesClassCareer(new Villager(),55,57));
    this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(),58,58));
    this.AvailableCareers.push(new SpeciesClassCareer(new Coachman(),59,60));
    this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(),61,63));
    this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(),64,65));
    this.AvailableCareers.push(new SpeciesClassCareer(new Pedlar(),66,67));
    this.AvailableCareers.push(new SpeciesClassCareer(new RoadWarden(),68,68));
    this.AvailableCareers.push(new SpeciesClassCareer(new Boatman(),69,69));
    this.AvailableCareers.push(new SpeciesClassCareer(new Huffer(),70,70));
    this.AvailableCareers.push(new SpeciesClassCareer(new Riverwarden(),71,71));
    this.AvailableCareers.push(new SpeciesClassCareer(new Riverwoman(),72,74));
    this.AvailableCareers.push(new SpeciesClassCareer(new Seaman(),75,75));
    this.AvailableCareers.push(new SpeciesClassCareer(new Smuggler(),76,79));
    this.AvailableCareers.push(new SpeciesClassCareer(new Stevedore(),80,82));
    this.AvailableCareers.push(new SpeciesClassCareer(new Bawd(),83,85));
    this.AvailableCareers.push(new SpeciesClassCareer(new Charlatan(),86,86));
    this.AvailableCareers.push(new SpeciesClassCareer(new Fence(),87,87));
    this.AvailableCareers.push(new SpeciesClassCareer(new GraveRobber(),88,88));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),89,89));
    this.AvailableCareers.push(new SpeciesClassCareer(new Racketeer(),90,90));
    this.AvailableCareers.push(new SpeciesClassCareer(new Thief(),91,94));
    this.AvailableCareers.push(new SpeciesClassCareer(new Guard(),95,96));
    this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(),97,97));
    this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(),98,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Herbalist(),46,47));
    this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(),48,50));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scout(),51,56));
    this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(),57,59));
    this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(),60,62));
    this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(),63,63));
    this.AvailableCareers.push(new SpeciesClassCareer(new Boatman(),64,64));
    this.AvailableCareers.push(new SpeciesClassCareer(new Seaman(),65,79));
    this.AvailableCareers.push(new SpeciesClassCareer(new Smuggler(),80,80));
    this.AvailableCareers.push(new SpeciesClassCareer(new Bawd(),81,82));
    this.AvailableCareers.push(new SpeciesClassCareer(new Charlatan(),83,85));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),86,88));
    this.AvailableCareers.push(new SpeciesClassCareer(new Cavalryman(),89,92));
    this.AvailableCareers.push(new SpeciesClassCareer(new Guard(),93,94));
    this.AvailableCareers.push(new SpeciesClassCareer(new Knight(),95,95));
    this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(),96,97));
    this.AvailableCareers.push(new SpeciesClassCareer(new Protagonist(),98,98));
    this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(),99,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Herbalist(),40,40));
    this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(),41,42));
    this.AvailableCareers.push(new SpeciesClassCareer(new Miner(),43,43));
    this.AvailableCareers.push(new SpeciesClassCareer(new Mystic(),44,44));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scout(),45,45));
    this.AvailableCareers.push(new SpeciesClassCareer(new Villager(),46,50));
    this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(),51,51));
    this.AvailableCareers.push(new SpeciesClassCareer(new Coachman(),52,52));
    this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(),53,54));
    this.AvailableCareers.push(new SpeciesClassCareer(new Flagellant(),55,56));
    this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(),57,57));
    this.AvailableCareers.push(new SpeciesClassCareer(new Pedlar(),58,58));
    this.AvailableCareers.push(new SpeciesClassCareer(new RoadWarden(),59,59));
    this.AvailableCareers.push(new SpeciesClassCareer(new WitchHunter(),60,60));
    this.AvailableCareers.push(new SpeciesClassCareer(new Boatman(),61,62));
    this.AvailableCareers.push(new SpeciesClassCareer(new Huffer(),63,63));
    this.AvailableCareers.push(new SpeciesClassCareer(new Riverwarden(),64,65));
    this.AvailableCareers.push(new SpeciesClassCareer(new Riverwoman(),66,68));
    this.AvailableCareers.push(new SpeciesClassCareer(new Seaman(),69,70));
    this.AvailableCareers.push(new SpeciesClassCareer(new Smuggler(),71,71));
    this.AvailableCareers.push(new SpeciesClassCareer(new Stevedore(),72,73));
    this.AvailableCareers.push(new SpeciesClassCareer(new Wrecker(),74,74));
    this.AvailableCareers.push(new SpeciesClassCareer(new Bawd(),75,76));
    this.AvailableCareers.push(new SpeciesClassCareer(new Charlatan(),77,77));
    this.AvailableCareers.push(new SpeciesClassCareer(new Fence(),78,78));
    this.AvailableCareers.push(new SpeciesClassCareer(new GraveRobber(),79,79));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),80,83));
    this.AvailableCareers.push(new SpeciesClassCareer(new Racketeer(),84,84));
    this.AvailableCareers.push(new SpeciesClassCareer(new Thief(),85,87));
    this.AvailableCareers.push(new SpeciesClassCareer(new Witch(),88,88));
    this.AvailableCareers.push(new SpeciesClassCareer(new Cavalryman(),89,90));
    this.AvailableCareers.push(new SpeciesClassCareer(new Guard(),91,92));
    this.AvailableCareers.push(new SpeciesClassCareer(new Knight(),93,93));
    this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(),94,94));
    this.AvailableCareers.push(new SpeciesClassCareer(new Protagonist(),95,95));
    this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(),96,99));
    this.AvailableCareers.push(new SpeciesClassCareer(new WarriorPriest(),100,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Herbalist(),36,42));
    this.AvailableCareers.push(new SpeciesClassCareer(new Hunter(),43,52));
    this.AvailableCareers.push(new SpeciesClassCareer(new Mystic(),53,57));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scout(),58,68));
    this.AvailableCareers.push(new SpeciesClassCareer(new BountyHunter(),69,70));
    this.AvailableCareers.push(new SpeciesClassCareer(new Entertainer(),71,75));
    this.AvailableCareers.push(new SpeciesClassCareer(new Messenger(),76,78));
    this.AvailableCareers.push(new SpeciesClassCareer(new Wrecker(),79,79));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),80,85));
    this.AvailableCareers.push(new SpeciesClassCareer(new Cavalryman(),86,90));
    this.AvailableCareers.push(new SpeciesClassCareer(new Guard(),91,92));
    this.AvailableCareers.push(new SpeciesClassCareer(new Knight(),93,94));
    this.AvailableCareers.push(new SpeciesClassCareer(new PitFighter(),95,96));
    this.AvailableCareers.push(new SpeciesClassCareer(new Soldier(),97,100));
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
