import { DiceResult } from './../../src/dicer';
import { Dicer } from '../../src/dicer';

describe('Dicer - ', () => {
  let dicer: Dicer;
  beforeEach(() => {
    dicer = new Dicer();
  });

  let setMockDicResult = (tens, ones) => {
    dicer.RollDice = () => {
      let result = new DiceResult();
      result.Tens = tens;
      result.Ones = ones;
      return result;
    };
  };

  it('can return a dice result', () => {
    expect(dicer.RollDice()).toBeDefined();    
  });
  
  it('can return that the result are doubles', () => {
    setMockDicResult(1,1);
    expect(dicer.RollDice().AreDoubles()).toBeTruthy();    
  });
  
  it('can return that the result is not doubles', () => {
    setMockDicResult(1,0);
    expect(dicer.RollDice().AreDoubles()).toBeFalsy();
  });
  
  it('can return the percentile result', () => {
    setMockDicResult(8,5);

    expect(dicer.RollDice().PercentileResult()).toEqual(85);
  });
  
  it('can return the percentile result of 100', () => {
    setMockDicResult(0,0);

    expect(dicer.RollDice().PercentileResult()).toEqual(100);
  });
  
  it('can return the percentile result of 1', () => {
    setMockDicResult(0,1);

    expect(dicer.RollDice().PercentileResult()).toEqual(1);
  });
  
  it('can return the reversed result', () => {
    setMockDicResult(5,6);

    expect(dicer.RollDice().Reversed()).toEqual(65);
  });
  
  it('can return the reversed result', () => {
    setMockDicResult(0,1);

    expect(dicer.RollDice().Reversed()).toEqual(10);
  });

  it('can return the reversed result', () => {
    setMockDicResult(0,0);

    expect(dicer.RollDice().Reversed()).toEqual(100);
  });

  it('can return the sum result', () => {
    setMockDicResult(5,6);

    expect(dicer.RollDice().Sum()).toEqual(11);
  });
  
  it('can return the sum result', () => {
    setMockDicResult(0,0);

    expect(dicer.RollDice().Sum()).toEqual(20);
  });
});
