import { Species } from "./species";

export class Halfling extends Species {
  Description:string = "Halfling";
  WeaponSkill:number = 10;
  BallisticSkill:number = 30;
  Strength:number = 10;
  Dexterity:number = 30;
  Willpower:number = 30;
  Fellowship:number = 30;

  Fate:number = 0;
  Resilience:number = 2;
  ExtraPoints:number = 3;
  Movement:number = 3;
}
