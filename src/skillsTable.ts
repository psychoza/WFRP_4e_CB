import { Characteristic } from './characteristic';
import { Skill } from './skill';
import { bindable } from 'aurelia-framework';
export class SkillsTable {
  @bindable Characteristics: Characteristic[] = [];
  @bindable Skills: Skill[] = [];

  constructor() {
    
   };

  private getCharacteristicScore(type: CharacteristicType): number {
    return this.Characteristics.find((c) => { return c.CharacteristicType === type; }).GetTotalScore();
  }

  private getSkillLevel(skill: Skill): number {
    let skillType = skill.CharacteristicType;
    let characteristicScore = this.getCharacteristicScore(skillType);
    return characteristicScore + skill.Advances;
  }
}
