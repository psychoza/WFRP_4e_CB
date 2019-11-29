import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { Character } from '../objects/character';
import { Skill } from '../objects/skill';
import { sortArrayByProperty } from '../utilities/array-utilities';

@autoinject()
export class SelectSpeciesSkills {
  character: Character;
  fiveAdvanceSkills: Skill[] = [];
  threeAdvanceSkills: Skill[] = [];
  chosenFiveAdvanceSkill: Skill = null;
  chosenThreeAdvanceSkill: Skill = null;

  get availableSkills(): Skill[] {
    let skills = [...this.character.Species.Skills];
    let fives = this.fiveAdvanceSkills;
    let threes = this.threeAdvanceSkills;
    if (skills.length === 0)
      return null;

    if (fives.length > 0) {
      skills = [...skills.filter((s) => {
        return !fives.some((s2) => { return s.Description === s2.Description; });
      })];
    }

    if (threes.length > 0) {
      skills = [...skills.filter((s) => {
        return !threes.some((s2) => { return s.Description === s2.Description; });
      })];
    }

    sortArrayByProperty(skills, 'Description');

    return skills;
  }

  constructor(public dialogController: DialogController) {
  }

  activate(character: Character) {
    this.character = character;
  }

  addFiveSkill() {
    this.fiveAdvanceSkills.push(this.chosenFiveAdvanceSkill);
    sortArrayByProperty(this.fiveAdvanceSkills, 'Description');
  }

  addThreeSkill() {
    this.threeAdvanceSkills.push(this.chosenThreeAdvanceSkill);
    sortArrayByProperty(this.threeAdvanceSkills, 'Description');
  }

  removeFiveSkill(skill: Skill) {
    this.fiveAdvanceSkills = [...this.fiveAdvanceSkills.filter((s) => { return s.Description != skill.Description; })];
  }

  removeThreeSkill(skill: Skill) {
    this.threeAdvanceSkills = [...this.threeAdvanceSkills.filter((s) => { return s.Description != skill.Description; })];
  }

  confirmSelection() {
    this.fiveAdvanceSkills.forEach((s) => {
      this.addSkillToCharacter(s, 5);
    });
    this.threeAdvanceSkills.forEach((s) => {
      this.addSkillToCharacter(s, 3);
    });
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
