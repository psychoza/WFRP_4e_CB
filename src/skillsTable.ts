import { Characteristic } from './objects/characteristic';
import { Skill } from './objects/skill';
import { bindable } from 'aurelia-framework';
import { CharacteristicType } from './objects/characteristicType';
export class SkillsTable {
  @bindable Characteristics: Characteristic[] = [];
  @bindable Skills: Skill[] = [];

  constructor() {
    
   };

  private getCharacteristicScore(type: CharacteristicType): number {
    return this.Characteristics.find((c) => { return c.CharacteristicType === type; }).TotalScore;
  }

  private getSkillLevel(skill: Skill): number {
    let skillType = skill.CharacteristicType;
    let characteristicScore = this.getCharacteristicScore(skillType);
    return characteristicScore + skill.Advances;
  }
}
