import { autoinject } from "aurelia-framework";
import { Character } from "./objects/character";
import { DialogService } from 'aurelia-dialog';
import { SelectSpecies } from './dialogs/select-species'
import { SelectCareer } from './dialogs/select-career'
import { SelectCharacteristics } from "./dialogs/select-characteristics";

@autoinject()
export class CharacterBuilder {
  character: Character = null;

  constructor(public dialogService: DialogService) {
    this.createCharacter();
  }

  attached() {
    this.openSelectSpecies();
  }

  public createCharacter() {
    let newCharacter = new Character();
    //newCharacter.rollANewCharacter();
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
    this.dialogService.open({ viewModel: SelectSpecies, model: this.character, lock: true, }).whenClosed(response => {
      if (!response.wasCancelled) {
        this.openSelectCareer();
      }
    });
  }

  openSelectCareer(){
    this.dialogService.open({ viewModel: SelectCareer, model: this.character, lock: true, }).whenClosed(response => {
      if (!response.wasCancelled) {
        this.openSelectCharacteristics();
      }
    });
  }  

  openSelectCharacteristics(){
    this.dialogService.open({ viewModel: SelectCharacteristics, model: this.character, lock: true, }).whenClosed(response => {
      if (!response.wasCancelled) {
        this.character.finishRollingANewCharacter();
      }
    });
  }
}
