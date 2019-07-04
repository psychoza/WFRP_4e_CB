import { Characteristic } from './../../src/characteristic';
describe('Characteristic - ', () => {
  let stat: Characteristic;
  beforeEach(() => {
    stat= new Characteristic('', 0,0);
  });

  it('has a description', () => {
    expect(stat.Description).toBeDefined();    
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
  

});
