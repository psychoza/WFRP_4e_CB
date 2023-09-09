import {DialogController} from 'aurelia-dialog';
import {autoinject, computedFrom} from 'aurelia-framework';
import {Character} from '../objects/character';
import {Dwarf, Halfling, HighElf, Human, Species, WoodElf} from '../objects/species';

@autoinject()
export class SelectSpecies {
  character:Character;
  availableSpecies: Species[] = [];
  selectedSpecies: Species = null;
  speciesHasBeenRolled:boolean = false;
  hideStats: boolean = false;
  
  @computedFrom('character', 'character.Species', 'character.Species.Description', 'selectedSpecies', 'selectedSpecies.Description')
  get doesGrantBonus(): boolean {
    return this.character.RandomSpecies.Description === this.selectedSpecies.Description;
  }
  
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
    this.resync();
    this.speciesHasBeenRolled = true; 
  }

  selectSpecies(){
    this.character.selectSpecies(this.selectedSpecies);
    this.dialogController.ok();
  }
  
  ifThisIsTheRandomSpecies(species:Species):boolean{
    return species.Description === this.character.RandomSpecies.Description;
  }
  
  resync():void {
    this.selectedSpecies = this.findSpecies(this.character.RandomSpecies);
  }
  
  findSpecies(species: Species): Species {
    return this.availableSpecies.find((s) => {
      return s.Description === species.Description;
    });
  }
}


