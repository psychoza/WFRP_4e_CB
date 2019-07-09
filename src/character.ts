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
    RandomSpecies:Species = null;
    SpeciesRoll:number = 0;
    CharacteristicSum:number = 0;
    CharacteristicPct:number = 0;
    WeaponSkill:Characteristic = new Characteristic('',0,0);
    BallisticSkill:Characteristic= new Characteristic('',0,0);
    Strength:Characteristic= new Characteristic('',0,0);
    Toughness:Characteristic= new Characteristic('',0,0);
    Initiative:Characteristic= new Characteristic('',0,0);
    Agility:Characteristic= new Characteristic('',0,0);
    Dexterity:Characteristic= new Characteristic('',0,0);
    Intelligence:Characteristic= new Characteristic('',0,0);
    Willpower:Characteristic= new Characteristic('',0,0);
    Fellowship:Characteristic= new Characteristic('',0,0);
    Experience:number = 0;
    constructor() {
      this.dicer = new Dicer();
      this.Species = new Human();
      //this.rollANewCharacter();
    }

    rollANewCharacter():void{      
      this.Species = this.rollSpecies();
      this.RandomSpecies = this.Species;
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
      
      this.setCharacteristicRollNumbers();
      this.Experience = this.getExperience();
    }

    rollSum():number{
      return this.dicer.RollDice().Sum();
    }
    
    rollPercentile():number{
      return this.dicer.RollDice().PercentileResult();
    }

    rollSpecies():Species{
      this.SpeciesRoll = this.rollPercentile();
      if(this.SpeciesRoll >= 1 && this.SpeciesRoll <= 90)
        return new Human();
      else if(this.SpeciesRoll >= 91 && this.SpeciesRoll <= 94)
        return new Halfling();
      else if(this.SpeciesRoll >= 95 && this.SpeciesRoll <= 98)
        return new Dwarf();
      else if(this.SpeciesRoll == 99)
        return new HighElf();
      else if(this.SpeciesRoll == 100)
        return new WoodElf();
    }

    setCharacteristicRollNumbers():void{
      this.CharacteristicSum = this.WeaponSkill.StartingScore +
        this.BallisticSkill.StartingScore +
        this.Strength.StartingScore +
        this.Toughness.StartingScore +
        this.Initiative.StartingScore +
        this.Agility.StartingScore +
        this.Dexterity.StartingScore +
        this.Intelligence.StartingScore +
        this.Willpower.StartingScore +
        this.Fellowship.StartingScore;
      this.CharacteristicPct = Math.floor((this.CharacteristicSum / 200) * 100);
    }

    selectSpecies(species:Species){
      this.Species = species;
      this.Experience = this.getExperience();
    }

    swapCharacteristics(c1:Characteristic, c2:Characteristic){
      c1.SwapStartingScores(c2);
      this.Experience = this.getExperience();
    }

    getExperience():number{
      let xp:number = 0;

      if (this.isUsingTheirRandomSpecies())
        xp += 20;
      if (this.isUsingTheirRandomCharacteristics())
        xp += 50;
      return xp;
    }

  private isUsingTheirRandomSpecies():boolean {
    return this.RandomSpecies.Description === this.Species.Description;
  }

  private isUsingTheirRandomCharacteristics():boolean {
    if (this.WeaponSkill.HasOriginalScore() &&
      this.BallisticSkill.HasOriginalScore() &&
      this.Strength.HasOriginalScore() &&
      this.Toughness.HasOriginalScore() &&
      this.Initiative.HasOriginalScore() &&
      this.Agility.HasOriginalScore() &&
      this.Dexterity.HasOriginalScore() &&
      this.Intelligence.HasOriginalScore() &&
      this.Willpower.HasOriginalScore() &&
      this.Fellowship.HasOriginalScore()
    )
      return true;
    else 
      return false;
  }
}
