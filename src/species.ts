import { Scholar, Outlaw } from './career';
import { SpeciesClassCareer } from './speciesClassCareer';
import { computedFrom } from "aurelia-binding";

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

  @computedFrom('Strength', 'Toughness', 'Willpower')
  get Wounds(): number {
    return this.Strength;
  }

  constructor() {
  }
  // class and career table page 30
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
}

export class Human extends Species {
  Description: string = "Human";
  Fate: number = 2;
  Resilience: number = 1;
  ExtraPoints: number = 3;
  Movement: number = 4;

  AvailableCareers:SpeciesClassCareer[] = [];

  constructor(){
    super();
    this.AvailableCareers.push(new SpeciesClassCareer(Scholar,12,13));
    this.AvailableCareers.push(new SpeciesClassCareer(Outlaw,80,83));
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
}


