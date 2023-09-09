import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { Character } from '../objects/character';
import { Species, Human, Dwarf, Halfling, HighElf, WoodElf } from '../objects/species';

@autoinject()
export class SelectMode {
  character:Character;
  useRandomRolls: boolean = true;
  constructor(public dialogController: DialogController) {    
  }

  activate(character: Character) {    
    this.character = character;
    this.useRandomRolls = true;
    this.character.UseRandomRolls = this.useRandomRolls;
  }

  confirm(event){
    this.character.UseRandomRolls = this.useRandomRolls;
    this.dialogController.ok();
  }
}


