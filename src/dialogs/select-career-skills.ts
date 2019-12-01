import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { Character } from '../objects/character';
import { Skill, ISkill } from '../objects/skill';
import { sortArrayByProperty } from '../utilities/array-utilities';

@autoinject()
export class SelectCareerSkills {
  character: Character;
  availableSkills: Skill[] = [];

  constructor(public dialogController: DialogController) {
  }

  activate(character: Character) {
    this.character = character;
    this.availableSkills = this.character.Career.Skills.map((s)=>{
      return new Skill({ Description: s.Description, CharacteristicType: s.CharacteristicType, IsAdvanced: s.IsAdvanced, IsGrouped: s.IsAdvanced, Advances: 0 } as ISkill);
    });
  }

  updateAdvances(index) {
    let skill = this.availableSkills[index];
    let currentAdvances = 0;
    this.availableSkills.forEach((s) => {
      if (s != skill)
        currentAdvances += Number.parseInt(s.Advances.toString());
    });

    if (skill.Advances > 10)
      skill.Advances = 10;
    else if (skill.Advances < 0)
      skill.Advances = 0;


    let remainingAdvances = 40 - currentAdvances;
    if (remainingAdvances > 10)
      remainingAdvances = 10;

    if (skill.Advances > remainingAdvances)
      skill.Advances = remainingAdvances;
  }

  confirmSelection() {
    this.availableSkills.forEach((s)=>{
      s.Advances = Number.parseInt(s.Advances.toString());
      if(s.Advances>0) 
      {        
        this.addSkillToCharacter(s);
      }
    });
    this.dialogController.ok();
  }

  addSkillToCharacter(skill: Skill) {
    let existingSkill = this.character.Skills.find((s) => { return s.Description === skill.Description; });
    if (existingSkill) {
      existingSkill.Advances += skill.Advances;
    }
    else {
      this.character.Skills.push(skill);
    }
  }
}
