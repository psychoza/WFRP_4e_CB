import { DialogController } from 'aurelia-dialog';
import { autoinject, computedFrom } from 'aurelia-framework';
import { Character } from '../objects/character';
import { Skill, ISkill } from '../objects/skill';
import { sortArrayByProperty } from '../utilities/array-utilities';

@autoinject()
export class SelectCareerSkills {
  character: Character;
  availableSkills: CareerSkill[] = [];
  allSkillsAllocated:boolean = false;

  get totalAdvances():number {
    let currentAdvances:number = 0;
    this.availableSkills.forEach((s) => {
        currentAdvances += Number.parseInt(s.Advances.toString());
    });
    return currentAdvances;
  }

  constructor(public dialogController: DialogController) {
  }

  activate(character: Character) {
    this.character = character;
    this.availableSkills = this.character.Career.Skills.map((s)=>{
      let skill = this.character.Skills.find((skill)=> { return skill.Description == s.Description; });
      return new CareerSkill({ 
        Description: s.Description, 
        CharacteristicType: s.CharacteristicType, 
        IsAdvanced: s.IsAdvanced, 
        IsGrouped: s.IsAdvanced, 
        Advances: 0, 
        PreviousAdvances: skill && skill.Advances || 0,
        CharacteristicScore: character.getCharacteristicScore(s.CharacteristicType) 
      } as ISkill);
    });
  }

  updateAdvances(index: number) {
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
    else
      skill.Advances = Number.parseInt(skill.Advances.toString());

    let remainingAdvances = 40 - currentAdvances;
    if (remainingAdvances > 10)
      remainingAdvances = 10;

    if (skill.Advances > remainingAdvances)
      skill.Advances = remainingAdvances;

    this.allSkillsAllocated = skill.Advances + currentAdvances === 40;
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
    skill.Advances = Number.parseInt(skill.Advances.toString());
    let existingSkill = this.character.Skills.find((s) => { return s.Description === skill.Description; });
    if (existingSkill) {
      existingSkill.Advances += skill.Advances;
    }
    else {
      this.character.Skills.push(skill);
    }
  }
}


export class CareerSkill extends Skill{
  PreviousAdvances: number = 0;
  CharacteristicScore: number = 0;
  @computedFrom('PreviousAdvances', 'Advances')
  get TotalAdvances():number{
    let result = this.PreviousAdvances + Number.parseInt(this.Advances.toString());
    result += this.CharacteristicScore;
    return result;
  }

  constructor();
  constructor(obj: ISkill);
  constructor(obj: ISkill = {} as ISkill) {
    super(obj);
    this.PreviousAdvances = obj && obj.PreviousAdvances || 0;
    this.CharacteristicScore = obj && obj.CharacteristicScore || 0;
  }
}
