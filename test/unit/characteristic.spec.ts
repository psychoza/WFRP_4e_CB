import { Characteristic } from '../../src/objects/characteristic';
describe('Characteristic - ', () => {
  let stat: Characteristic;
  beforeEach(() => {
    stat = new Characteristic(CharacteristicType.WeaponSkill,'', 0, 0);
  });

  it('has a description', () => {
    expect(stat.Description).toBeDefined();
  });
  
  it('has a type', () => {
    expect(stat.CharacteristicType).toBeDefined();
  });

  it('has a starting score', () => {
    expect(stat.StartingScore).toBeDefined();
  });

  it('has a species score', () => {
    expect(stat.SpeciesScore).toBeDefined();
  });

  it('has a GetTotalScore', () => {
    expect(stat.GetTotalScore).toBeDefined();
  });

  it('the GetTotalScore returns the starting score plus the species score', () => {
    stat.StartingScore = 15;
    stat.SpeciesScore = 20;
    expect(stat.GetTotalScore()).toEqual(stat.StartingScore + stat.SpeciesScore);
  });

  it('has a GetScoreBonus', () => {
    expect(stat.GetScoreBonus).toBeDefined();
  });

  it('the GetScoreBonus returns a 3 with a TotalScore of 30', () => {
    stat.StartingScore = 10;
    stat.SpeciesScore = 20;
    expect(stat.GetScoreBonus()).toEqual(3);
  });

  it('the GetScoreBonus returns a 2 with a TotalScore of 29', () => {
    stat.StartingScore = 9;
    stat.SpeciesScore = 20;
    expect(stat.GetScoreBonus()).toEqual(2);
  });

  it('the GetScoreBonus returns a 4 with a TotalScore of 41', () => {
    stat.StartingScore = 11;
    stat.SpeciesScore = 30;
    expect(stat.GetScoreBonus()).toEqual(4);
  });

  it('can swap scores with another characteristic', () => {
    stat = new Characteristic(CharacteristicType.WeaponSkill,'test', 18, 20);
    let stat2 = new Characteristic(CharacteristicType.BallisticSkill,'best', 2, 20);
    expect(stat.SwapStartingScores).toBeDefined();
    stat.SwapStartingScores(stat2);
    expect(stat.StartingScore).toEqual(2);
    expect(stat.Description).toEqual("test");
    expect(stat2.StartingScore).toEqual(18);
    expect(stat2.Description).toEqual("best");
  });

  it('when it swaps scores it knows when it has its original value', () => {
    stat = new Characteristic(CharacteristicType.WeaponSkill,'test', 18, 20);
    let stat2 = new Characteristic(CharacteristicType.BallisticSkill,'best', 2, 20);
    stat.SwapStartingScores(stat2);
    expect(stat.HasOriginalScore()).toEqual(false);
    expect(stat2.HasOriginalScore()).toEqual(false);
    stat.SwapStartingScores(stat2);
    expect(stat.HasOriginalScore()).toEqual(true);
    expect(stat2.HasOriginalScore()).toEqual(true);
  });

  it('it can be advanced', () => {
    stat = new Characteristic(CharacteristicType.WeaponSkill,'test', 18, 20);
    expect(stat.Advances).toEqual(0);
    stat.Advance(25);
    expect(stat.Advances).toEqual(1);
  });

  it('it can return the cost to advance', () => {
    stat = new Characteristic(CharacteristicType.WeaponSkill,'test', 18, 20);
    expect(stat.Advances).toEqual(0);
    expect(stat.GetAdvanceCost()).toEqual(25);
    stat.Advances = 5;
    expect(stat.GetAdvanceCost()).toEqual(30);
    stat.Advances = 10;
    expect(stat.GetAdvanceCost()).toEqual(40);
    stat.Advances = 15;
    expect(stat.GetAdvanceCost()).toEqual(50);
    stat.Advances = 20;
    expect(stat.GetAdvanceCost()).toEqual(70);
    stat.Advances = 25;
    expect(stat.GetAdvanceCost()).toEqual(90);
    stat.Advances = 30;
    expect(stat.GetAdvanceCost()).toEqual(120);
    stat.Advances = 35;
    expect(stat.GetAdvanceCost()).toEqual(150);
    stat.Advances = 40;
    expect(stat.GetAdvanceCost()).toEqual(190);
    stat.Advances = 45;
    expect(stat.GetAdvanceCost()).toEqual(230);
    stat.Advances = 50;
    expect(stat.GetAdvanceCost()).toEqual(280);
    stat.Advances = 55;
    expect(stat.GetAdvanceCost()).toEqual(330);
    stat.Advances = 60;
    expect(stat.GetAdvanceCost()).toEqual(390);
    stat.Advances = 65;
    expect(stat.GetAdvanceCost()).toEqual(450);
    stat.Advances = 70;
    expect(stat.GetAdvanceCost()).toEqual(520);
  });

  it('advancement takes in a number of xp, and returns the remainder after advancing', () => {
    stat = new Characteristic(CharacteristicType.WeaponSkill,'test', 18, 20);
    expect(stat.Advances).toEqual(0);
    expect(stat.Advance(28)).toEqual(3);
  });  
});
