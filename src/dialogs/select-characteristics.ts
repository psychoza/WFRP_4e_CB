import {autoinject, computedFrom, observable} from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { Characteristic } from '../objects/characteristic';
import { Character } from '../objects/character';
import {CharacteristicDescriptions} from "../objects/characteristicDescriptions";

@autoinject()
export class SelectCharacteristics {
  character: Character;
  allCharacteristicsAllocated: boolean = false;
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

  @computedFrom('allCharacteristicsAllocated')
  get disableConfirm(): boolean {      
    return !this.allCharacteristicsAllocated;
  }
  
  @computedFrom('currentManualIndex')
  get isDoneAdding(): boolean {
    return this.currentManualIndex === 10 || this.character.UseRandomRolls;
  }
  
  get totalAdvances(): number {
      let currentAdvances:number = 0;
      this.character.Characteristics.forEach((s) => {
          currentAdvances += Number.parseInt(s.Advances.toString());
      });
      return currentAdvances;
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

    updateAdvances(index: number) {
        let characteristic = this.character.Characteristics[index];
        let currentAdvances = 0;
        this.character.Characteristics.forEach((c) => {
            if (c != characteristic)
                currentAdvances += Number.parseInt(c.Advances.toString());
        });

        if (characteristic.Advances > 5)
            characteristic.Advances = 5;
        else if (characteristic.Advances < 0)
            characteristic.Advances = 0;
        else
            characteristic.Advances = Number.parseInt(characteristic.Advances.toString());

        let remainingAdvances = 5 - currentAdvances;
        if (remainingAdvances > 5)
            remainingAdvances = 5;

        if (characteristic.Advances > remainingAdvances)
            characteristic.Advances = remainingAdvances;

        this.allCharacteristicsAllocated = characteristic.Advances + currentAdvances === 5;
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
