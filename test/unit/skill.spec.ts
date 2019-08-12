import { Skill, ISkill } from "../../src/objects/skill";

describe('Skill - ', () => {
  let skill: Skill = null;

  beforeEach(() => {
    skill = new Skill();
  });

  it('has a description', () => {
    expect(skill.Description).toBeDefined();
  });

  it('has a description that it was defined as', () => {
    let desc = "Awesome";
    skill = new Skill({Description: desc} as ISkill);
    expect(skill.Description).toEqual(desc);
  });

  it('has a given characteristic type associated to it', () => {
    let type = CharacteristicType.Agility;
    skill = new Skill({CharacteristicType: type} as ISkill);
    expect(skill.CharacteristicType).toEqual(CharacteristicType.Agility);
  });

  it('has a way to determine if its a basic skill or not', () => {    
    skill = new Skill({IsAdvanced:false} as ISkill);
    expect(skill.IsAdvanced).toEqual(false);
  });

  it('has a advances', () => {    
    expect(skill.Advances).toEqual(0);
  });
  
  it('it can be advanced', () => {
    expect(skill.Advances).toEqual(0);
    skill.Advance(10);
    expect(skill.Advances).toEqual(1);
  });

  it('it can return the cost to advance', () => {
    expect(skill.Advances).toEqual(0);
    expect(skill.GetAdvanceCost()).toEqual(10);
    skill.Advances = 5;
    expect(skill.GetAdvanceCost()).toEqual(15);
    skill.Advances = 10;
    expect(skill.GetAdvanceCost()).toEqual(20);
    skill.Advances = 15;
    expect(skill.GetAdvanceCost()).toEqual(30);
    skill.Advances = 20;
    expect(skill.GetAdvanceCost()).toEqual(40);
    skill.Advances = 25;
    expect(skill.GetAdvanceCost()).toEqual(60);
    skill.Advances = 30;
    expect(skill.GetAdvanceCost()).toEqual(80);
    skill.Advances = 35;
    expect(skill.GetAdvanceCost()).toEqual(110);
    skill.Advances = 40;
    expect(skill.GetAdvanceCost()).toEqual(140);
    skill.Advances = 45;
    expect(skill.GetAdvanceCost()).toEqual(180);
    skill.Advances = 50;
    expect(skill.GetAdvanceCost()).toEqual(220);
    skill.Advances = 55;
    expect(skill.GetAdvanceCost()).toEqual(270);
    skill.Advances = 60;
    expect(skill.GetAdvanceCost()).toEqual(320);
    skill.Advances = 65;
    expect(skill.GetAdvanceCost()).toEqual(380);
    skill.Advances = 70;
    expect(skill.GetAdvanceCost()).toEqual(440);
  });

  it('advancement takes in a number of xp, and returns the remainder after advancing', () => {
    expect(skill.Advances).toEqual(0);
    expect(skill.Advance(11)).toEqual(1);
  });

  it('can be a grouped skill', () => {
    skill = new Skill({IsGrouped: true} as ISkill);
    expect(skill.IsGrouped).toEqual(true);
  });
});
