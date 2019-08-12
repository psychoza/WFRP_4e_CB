import { Character } from "./objects/character";
import { Dicer } from "./objects/dicer";
import { DialogService } from 'aurelia-dialog';
import { SelectSpecies } from './dialogs/select-species'
import { autoinject } from "aurelia-framework";

@autoinject()
export class CharacterBuilder {
  character: Character = null;

  constructor(public dialogService: DialogService) {
    this.createCharacter();
  }

  public createCharacter() {
    let newCharacter = new Character();
    newCharacter.rollANewCharacter();
    this.character = newCharacter;
  }

  public getCeilingValue(value) {
    return Math.ceil(value);
  }

  get numberOfSkillsPerColumn(): number {
    if (this.character) {
      return Math.ceil(this.character.Skills.length / 3)
    }
    else
      return 0;
  }

  openSelectSpecies() {
    this.dialogService.open({ viewModel: SelectSpecies, model: 'test', lock: true, keyboard: true }).whenClosed(response => {
      if (!response.wasCancelled) {
        console.log('good - ', response.output);
      } else {
        console.log('bad');
      }
      console.log(response.output);
    });
  }
}
