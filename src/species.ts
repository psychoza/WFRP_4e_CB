import { computedFrom } from "aurelia-binding";
import { inherits } from "util";

export class Species {
    Description:string = "Not Specified";

    WeaponSkill:number = 20;
    BallisticSkill:number = 20;
    Strength:number = 20;
    Toughness:number = 20;
    Initiative:number = 20;
    Agility:number = 20;
    Dexterity:number = 20;
    Intelligence:number = 20;
    Willpower:number = 20;
    Fellowship:number = 20;
    Fate:number = 0;
    Resilience:number = 0;
    ExtraPoints:number = 0;
    Movement:number = 0;
    
    @computedFrom('Strength','Toughness','Willpower')        
    get Wounds():number{
      return this.Strength;
    }

    constructor() {
    }
    // class and career table page 30
}
