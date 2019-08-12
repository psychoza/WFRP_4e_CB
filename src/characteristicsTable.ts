import { Characteristic } from './objects/characteristic';
import { bindable } from 'aurelia-framework';
export class CharacteristicsTable {
  @bindable Characteristics: Characteristic[];

  get CharacteristicSum():number{
    let sum = 0;
    this.Characteristics.forEach(c => {
      sum += c.StartingScore
    });
    return sum;
  }
  
  get CharacteristicPct():number{
    return Math.floor((this.CharacteristicSum / 200) * 100);
  }
}
