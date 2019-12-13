import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { Character } from '../objects/character';
import { Species, Human, Dwarf, Halfling, HighElf, WoodElf } from '../objects/species';

@autoinject()
export class SelectSpecies {
  character:Character;
  availableSpecies: Species[] = [];
  selectedSpecies: Species = null;
  speciesHasBeenRolled:boolean = false;
  constructor(public dialogController: DialogController) {    
  }

  activate(character: Character) {
    this.availableSpecies = [
      new Human(),
      new Dwarf(),
      new Halfling(),
      new HighElf(),
      new WoodElf()
    ];
    this.character = character;
    this.RollForSpecies();
  }

  private RollForSpecies() {
    this.character.rollSpecies();
    this.selectedSpecies = this.availableSpecies.find((s) => { return s.Description === this.character.RandomSpecies.Description; });
    this.speciesHasBeenRolled = true; 
  }

  selectSpecies(event){
    this.character.selectSpecies(this.selectedSpecies);
  }
  
  ifThisIsTheRandomSpecies(species:Species):boolean{
    return species.Description === this.character.RandomSpecies.Description;
  }
}


