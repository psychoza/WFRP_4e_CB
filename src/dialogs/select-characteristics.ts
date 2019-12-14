import { autoinject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { Characteristic } from './../objects/characteristic';
import { Character } from '../objects/character';

@autoinject()
export class SelectCharacteristics {
  character: Character;
  swapTargetCharacteristic: Characteristic;
  constructor(public dialogController: DialogController) {

  }

  activate(character: Character) {
    this.character = character;

    this.character.rollCharacteristics();
  }

  selectType(event: any, characteristic: Characteristic) {

    //this.character.selectCareer(this.selectedType);
  }

  swap() {

  }

  list: HTMLElement;
  itemDraggedTo: Characteristic;
  itemDragged: Characteristic;

  drag(characteristic: Characteristic) {
    this.itemDragged = characteristic;
    if (!this.list.classList.contains('dragging')) {
      this.list.classList.add('dragging');
    }
    return true;
  }

  drop() {
    debugger;
    this.itemDragged.SwapStartingScores(this.itemDraggedTo);
    if (this.list.classList.contains('dragging')) {
      this.list.classList.remove('dragging');
    }
    return true;
  }

  dragover(characteristic: Characteristic) {
    this.itemDraggedTo = characteristic;
    return true;
  }
}
