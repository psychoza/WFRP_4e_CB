import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { Character } from '../objects/character';

@autoinject()
export class SelectSpecies {
  constructor(public dialogController: DialogController) {
  }
  activate(character: Character) {
    
  }
}


