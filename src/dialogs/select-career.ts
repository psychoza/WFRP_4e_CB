import { Career, Scholar, Merchant } from './../objects/career';
import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { Character } from '../objects/character';

@autoinject()
export class SelectCareer {
  character:Character;
  availableCareers: Career[] = [];
  selectedCareer: Career = null;
  constructor(public dialogController: DialogController) {    
  }

  activate(character: Character) {
    this.availableCareers = [
      new Scholar(),
      new Merchant()
    ];
    this.character = character;
    this.character.rollClassAndCareer();
    this.selectedCareer = this.availableCareers.find((c)=> {return c.Description === this.character.RandomCareer.Description; });
  }

  confirmCareer():void{
    this.character.selectCareer(this.selectedCareer);
    this.dialogController.ok();
  }
}


