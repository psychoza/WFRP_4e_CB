import { autoinject } from "aurelia-framework";
import { Character } from "./objects/character";
import { DialogService } from 'aurelia-dialog';

import { SelectSpecies } from './dialogs/select-species'
import { SelectCareer } from './dialogs/select-career'
import { SelectCharacteristics } from "./dialogs/select-characteristics";
import { SelectSpeciesSkills } from './dialogs/select-species-skills';
import { SelectCareerSkills } from './dialogs/select-career-skills';

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
    this.dialogService.open({ viewModel: SelectSpecies, model: this.character, lock: true }).whenClosed(response => {
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
        this.openSelectSpeciesSkills();        
      }
    });
  }

  openSelectSpeciesSkills(){
    this.dialogService.open({ viewModel: SelectSpeciesSkills, model: this.character, lock: true, }).whenClosed(response => {
      if (!response.wasCancelled) {
        this.openSelectCareerSkills();
      }
    });
    //TODO: TALENTS
    // Get the talents provided
  }

  openSelectCareerSkills(){
    this.dialogService.open({ viewModel: SelectCareerSkills, model: this.character, lock: true, }).whenClosed(response => {
      if (!response.wasCancelled) {
        this.character.finishRollingANewCharacter();
      }
    });
    // Allocate 40 points across 8 skills
    // no more than 10 per skill
    // TODO: TALENTS
    // choose 1 of the 4
  }
}
