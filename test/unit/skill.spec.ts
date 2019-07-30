import { Skill } from "../../src/skill";

describe('Skill - ', () => {
  let skill: Skill = null;

  beforeEach(() => {
    skill = new Skill("", CharacteristicType.Agility, false);
  });

  it('has a description', () => {
    expect(skill.Description).toBeDefined();
  });

  it('has a description that it was defined as', () => {
    let desc = "Awesome";
    skill = new Skill(desc, CharacteristicType.Agility, false);
    expect(skill.Description).toEqual(desc);
  });

  it('has a given characteristic type associated to it', () => {
    let type = CharacteristicType.Agility;
    skill = new Skill("Athletics", type, false);
    expect(skill.CharacteristicType).toEqual(CharacteristicType.Agility);
  });

  it('has a way to determine if its a basic skill or not', () => {    
    skill = new Skill("Athletics", CharacteristicType.Agility, false);
    expect(skill.IsAdvanced).toEqual(false);
  });

  it('has a advances', () => {    
    skill = new Skill("Athletics", CharacteristicType.Agility, false);
    expect(skill.Advances).toEqual(0);
  });

  // it('can be advanced', () => {    
  //   skill = new Skill("Athletics", CharacteristicType.Agility, false);
  //   skill.
  //   expect(skill.Advances).toEqual(0);
  // });
});
