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
  
  it('can swap scores with another characteristic', () => {
    stat = new Characteristic('test', 18, 20);
    let stat2 = new Characteristic('best', 2, 20);
    expect(stat.SwapStartingScores).toBeDefined();
    stat.SwapStartingScores(stat2);
    expect(stat.StartingScore).toEqual(2);
    expect(stat.Description).toEqual("test");
    expect(stat2.StartingScore).toEqual(18);
    expect(stat2.Description).toEqual("best");
  });

  
  
  it('when it swaps scores it knows when it has its original value', () => {
    stat = new Characteristic('test', 18, 20);
    let stat2 = new Characteristic('best', 2, 20);
    stat.SwapStartingScores(stat2);
    expect(stat.HasOriginalScore()).toEqual(false);
    expect(stat2.HasOriginalScore()).toEqual(false);
    stat.SwapStartingScores(stat2);
    expect(stat.HasOriginalScore()).toEqual(true);
    expect(stat2.HasOriginalScore()).toEqual(true);
  });

});
