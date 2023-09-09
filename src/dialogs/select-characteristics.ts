import {autoinject, computedFrom, observable} from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { Characteristic } from '../objects/characteristic';
import { Character } from '../objects/character';
import {CharacteristicDescriptions} from "../objects/characteristicDescriptions";

@autoinject()
export class SelectCharacteristics {
  character: Character;
  swapTargetCharacteristic: Characteristic;
  @observable currentRoll: number = 2;
  currentRollChanged(newValue: number, oldValue: number) {
    this.currentRoll = Number.parseInt(newValue.toString());
    if(this.currentRoll < 2) {
      this.currentRoll = 2;
    } else if (this.currentRoll > 20) {
      this.currentRoll = 20;
    }
  }
  currentManualIndex: number = 0;

  @computedFrom('isDoneAdding', 'character', 'character.UseRandomRolls')
  get showAddForm(): boolean {
    return !this.character.UseRandomRolls && !this.isDoneAdding;
  }
  
  @computedFrom('currentManualIndex')
  get isDoneAdding(): boolean {
    return this.currentManualIndex === 10;
  }
  
  constructor(public dialogController: DialogController) {

  }

  activate(character: Character) {
    this.currentManualIndex = 0;
    this.character = character;
    if(this.character.UseRandomRolls) {
      this.character.rollCharacteristics();
    }
  }

  changeCurrentRoll(): void {
    this.currentRoll = Number.parseInt(this.currentRoll.toString());
  }
  
  selectType(event: any, characteristic: Characteristic) {
  }

  swap() {

  }

  addCharacteristic(): void {
    this.character.addCharacteristic(CharacteristicDescriptions.Characteristics[this.currentManualIndex], this.currentRoll);
    this.currentManualIndex++;
    this.currentRoll = 2;
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
