import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { Character } from '../objects/character';
import { Skill } from '../objects/skill';
import { sortArrayByProperty } from '../utilities/array-utilities';

@autoinject()
export class SelectCareerSkills {
  character: Character;
  availableSkills: Skill[] = [];

  constructor(public dialogController: DialogController) {
  }

  activate(character: Character) {
    this.character = character;
    this.availableSkills = [...this.character.Career.Skills];
  }

  confirmSelection() {    
    this.dialogController.ok();
  }

  addSkillToCharacter(skill: Skill, advances: number) {
    let existingSkill = this.character.Skills.find((s) => { return s.Description === skill.Description; });
    if (existingSkill) {
      existingSkill.Advances += advances;
    }
    else {
      skill.Advances = advances;
      this.character.Skills.push(skill);
    }
  }
}
