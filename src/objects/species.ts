import {SpeciesClassCareer} from './speciesClassCareer';
import {Skill} from './skill';

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

