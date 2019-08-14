import { Scholar, Outlaw, Merchant } from './career';
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,20));
    this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(),21,24));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),25,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,21));
    this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(),22,25));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),26,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,100));
    this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(),22,26));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),27,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,21));
    this.AvailableCareers.push(new SpeciesClassCareer(new Merchant(),22,22));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),22,79));
    this.AvailableCareers.push(new SpeciesClassCareer(new Outlaw(),80,83));
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),84,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,100));
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
