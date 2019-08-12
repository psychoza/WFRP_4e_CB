import { Scholar, Outlaw } from './career';
import { SpeciesClassCareer } from './speciesClassCareer';
import { computedFrom } from "aurelia-binding";
import { Skill } from './skill';
import { SkillLibrary } from './skillLibrary';

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

  @computedFrom('Strength', 'Toughness', 'Willpower')
  get Wounds(): number {
    return this.Strength;
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,100));
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
    this.AvailableCareers.push(new SpeciesClassCareer(new Scholar(),1,79));
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
  }
}
