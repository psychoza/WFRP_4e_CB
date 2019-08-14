import { CharacteristicType } from './../objects/characteristicType';
import { autoinject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { Characteristic } from './../objects/characteristic';
import { Character } from '../objects/character';

@autoinject()
export class SwapCharacteristics {
  characteristic: Characteristic = null;
  availableCharacteristics: Characteristic[] = [];
  characteristicTypes: CharacteristicType[] = [
    CharacteristicType.WeaponSkill,
    CharacteristicType.BallisticSkill,
    CharacteristicType.Strength,
    CharacteristicType.Toughness,
    CharacteristicType.Initiative,
    CharacteristicType.Agility,
    CharacteristicType.Dexterity,
    CharacteristicType.Intelligence,
    CharacteristicType.Willpower,
    CharacteristicType.Fellowship
  ];
  characteristicType: CharacteristicType = null;

  constructor(public dialogController: DialogController) {
  }

  activate(characteristic: Characteristic, availableCharacteristics: Characteristic[]) {
    this.characteristic = characteristic;
    this.availableCharacteristics.splice( 
      this.availableCharacteristics.findIndex(
        (ac) => {
           return ac.CharacteristicType === characteristic.CharacteristicType; 
        }
      ),1);

    this.characteristicType = characteristic.CharacteristicType;
  }

  confirmSwap() {
    //this.dialogController.ok(swapTargetCharacteristic)
  }
  selectType(event: any, characteristic: Characteristic, swappingCharacteristic: Characteristic) {
    
    //this.character.selectCareer(this.selectedType);
  }
}


