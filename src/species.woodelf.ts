import { Species } from "./species";

export class WoodElf extends Species {
  Description:string = "Wood Elf";
  WeaponSkill:number = 30;
  BallisticSkill:number = 30;
  Initiative:number = 40;
  Agility:number = 30;
  Dexterity:number = 30;
  Intelligence:number = 30;
  Willpower:number = 30;

  Fate:number = 0;
  Resilience:number = 0;
  ExtraPoints:number = 2;
  Movement:number = 5;
}
