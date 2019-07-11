import { Career } from './../../src/career';
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
      let testClass = new Academics();
      expect(testClass.Description).toEqual('Academics');
    });

    describe('the Scholar Career - ', () => {
      it('has a description of Scholar', () => {
        let testCareer = new Scholar();
        expect(testCareer.Description).toEqual('Scholar');
      });

      it('has a class of Academics', () => {
        let testCareer = new Scholar();
        expect(testCareer.Class.Description).toEqual(new Academics().Description);
      });

      it('has a level of 1', () => {
        let testCareer = new Scholar();
        expect(testCareer.Level).toEqual(1);
      });

      it('When it has a level of 1, it has a Career Path of Student', () => {
        let testCareer = new Scholar();
        expect(testCareer.CareerPath).toEqual('Student');
      });
      
      it('When it has a level of 2, it has a Career Path of Scholar', () => {
        let testCareer = new Scholar();        
        testCareer.Level = 2;
        expect(testCareer.CareerPath).toEqual('Scholar');
      });
      
      it('When it has a level of 3, it has a Career Path of Fellow', () => {
        let testCareer = new Scholar();        
        testCareer.Level = 3;
        expect(testCareer.CareerPath).toEqual('Fellow');
      });
      
      it('When it has a level of 4, it has a Career Path of Professor', () => {
        let testCareer = new Scholar();        
        testCareer.Level = 4;
        expect(testCareer.CareerPath).toEqual('Professor');
      });

      //careers have levels
      // each level has :
      // descriptor
      // a skills list
      // a talents list
      // a trappings list
      // an advance scheme of characteristics
      // // at level 1 it is 3 characteristics
      // // level 2 it is 4
      // // level 2 it is 5
      // // level 2 it is 6
      // // at level 1 everything must be advanced by 5
      // // at level 2 everything must be advanced by 10
      // // at level 3 everything must be advanced by 15
      // // at level 4 everything must be advanced by 20

      
      // describe('Career Levels - ', () => {
      //   it('has a level of 1', () => {
      //   });
            //   it('Student @ 1', () => {
      //   });
            //   it('Scholar @ 2', () => {
      //   });
            //   it('Fellow @ 3', () => {
      //   });
            //   it('Professor @ 4', () => {
      //   });
      // });


      // describe('Advance Scheme - ', () => {
      //   it('has an Advance Scheme', () => {
      //     //describes which characteristics can be advanced
      //   });
      // });

      // describe('Can be go up a career level - ', () => {
      //   it('has all characteristics advanced 5 times', () => {
      //     //describes which characteristics can be advanced
      //   });
        
      //   it('has all career level skills advanced 5 times', () => {
      //     //describes which characteristics can be advanced
      //   });
        
      //   it('has at least 1 talent from the current career level', () => {
      //     //describes which characteristics can be advanced
      //   });

      //   it('has 100 current xp', () => {
      //     //describes which characteristics can be advanced
      //   });
      // });
    });
  });

  describe('the Rogues Class - ', () => {
    it('has a description of Rogues', () => {
      let testClass = new Rogues();
      expect(testClass.Description).toEqual('Rogues');
    });

    describe('the Outlaw Career - ', () => {
      it('has a description of Outlaw', () => {
        let testCareer = new Outlaw();
        expect(testCareer.Description).toEqual('Outlaw');
      });

      it('has a class of Rogues', () => {
        let testCareer = new Outlaw();
        expect(testCareer.Class.Description).toEqual(new Rogues().Description);
      });
    });
  });
});
