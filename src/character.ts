import { Characteristic } from './characteristic';
import { Dicer } from "./dicer";
import { Species} from "./species";
import { Human } from "./species.human";
import { Halfling } from "./species.halfling";
import { Dwarf } from "./species.dwarf";
import { HighElf } from "./species.highelf";
import { WoodElf } from "./species.woodelf";

export class Character {
  private dicer: Dicer = null;

    Name:string = "Bob";
    Species:Species = null;

    WeaponSkill:Characteristic = new Characteristic(0,0);
    BallisticSkill:Characteristic= new Characteristic(0,0);
    Strength:Characteristic= new Characteristic(0,0);
    Toughness:Characteristic= new Characteristic(0,0);
    Initiative:Characteristic= new Characteristic(0,0);
    Agility:Characteristic= new Characteristic(0,0);
    Dexterity:Characteristic= new Characteristic(0,0);
    Intelligence:Characteristic= new Characteristic(0,0);
    Willpower:Characteristic= new Characteristic(0,0);
    Fellowship:Characteristic= new Characteristic(0,0);

    constructor() {
      this.dicer = new Dicer();
      this.Species = new Human();
      //this.rollANewCharacter();
    }

    rollANewCharacter(){      
      this.Species = this.rollSpecies();

      this.WeaponSkill = new Characteristic('Weapon Skill',this.rollSum(), this.Species.WeaponSkill);
      this.BallisticSkill = new Characteristic('Ballistic Skill', this.rollSum(), this.Species.BallisticSkill);
      this.Strength = new Characteristic('Strength', this.rollSum(), this.Species.Strength);
      this.Toughness = new Characteristic('Toughness', this.rollSum(), this.Species.Toughness);
      this.Initiative = new Characteristic('Initiative', this.rollSum(), this.Species.Initiative);
      this.Agility = new Characteristic('Agility', this.rollSum(), this.Species.Agility);
      this.Dexterity = new Characteristic('Dexterity', this.rollSum(), this.Species.Dexterity);
      this.Intelligence = new Characteristic('Intelligence', this.rollSum(), this.Species.Intelligence);
      this.Willpower = new Characteristic('Willpower', this.rollSum(), this.Species.Willpower);
      this.Fellowship = new Characteristic('Fellowship', this.rollSum(), this.Species.Fellowship);
    }

    rollSum():number{
      return this.dicer.RollDice().Sum();
    }
    
    rollPercentile():number{
      return this.dicer.RollDice().PercentileResult();
    }

    rollSpecies():Species{
      let dieResult = this.rollPercentile();
      if(dieResult >= 1 && dieResult <= 90)
        return new Human();
      else if(dieResult >= 91 && dieResult <= 94)
        return new Halfling();
      else if(dieResult >= 95 && dieResult <= 98)
        return new Dwarf();
      else if(dieResult == 99)
        return new HighElf();
      else if(dieResult == 100)
        return new WoodElf();
    }
}
