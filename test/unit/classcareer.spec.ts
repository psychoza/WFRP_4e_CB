import { Academics, Rogues, Scholar, Outlaw } from '../../src/career';

describe('Class / Career - ', () => {
  // let setMockDicResult = (tens, ones) => {
  //   dicer.RollDice = () => {
  //     let result = new DiceResult();
  //     result.Tens = tens;
  //     result.Ones = ones;
  //     return result;
  //   };
  // };

  describe('the Academics Class - ', () => {
    it('has a description of Academics', () => {
      let testClass = Academics;
      expect(testClass.Description).toEqual('Academics');
    });

    describe('the Scholar Career - ', () => {
      it('has a description of Scholar', () => {
        let testCareer = Scholar;
        expect(testCareer.Description).toEqual('Scholar');
      });

      it('has a class of Academics', () => {
        let testCareer = Scholar;
        expect(testCareer.Class).toEqual(Academics);
      });
    });
  });

  describe('the Rogues Class - ', () => {
    it('has a description of Rogues', () => {
      let testClass = Rogues;
      expect(testClass.Description).toEqual('Rogues');
    });

    describe('the Outlaw Career - ', () => {
      it('has a description of Outlaw', () => {
        let testCareer = Outlaw;
        expect(testCareer.Description).toEqual('Outlaw');
      });

      it('has a class of Rogues', () => {
        let testCareer = Outlaw;
        expect(testCareer.Class).toEqual(Rogues);
      });
    });
  });
});
