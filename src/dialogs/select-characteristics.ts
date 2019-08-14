import { autoinject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { Characteristic } from './../objects/characteristic';
import { Character } from '../objects/character';

@autoinject()
export class SelectCharacteristics {
  character:Character;
  swapTargetCharacteristic: Characteristic;
  constructor(public dialogController: DialogController) {    
  }

  activate(character: Character) {    
    this.character = character;    

    this.character.rollCharacteristics();
  }

   selectType(event:any, characteristic: Characteristic){
     
     //this.character.selectCareer(this.selectedType);
   }

   swap(){
     
   }
}


