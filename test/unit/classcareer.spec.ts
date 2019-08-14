import { Characteristic } from '../../src/objects/characteristic';
import { Career } from '../../src/objects/career';
import { Academics, Rogues, Scholar, Outlaw } from '../../src/objects/career';
import { CharacteristicType } from '../../src/objects/characteristicType';

describe('Class / Career - ', () => {

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

      it('has a list of skills', () => {
        let testCareer = new Scholar();
        expect(testCareer.Skills).toBeDefined();
      });

      it('When it has a level of 1, it has a Career Path of Student', () => {
        let testCareer = new Scholar();
        expect(testCareer.CareerPath).toEqual('Student');
        expect(testCareer.Status).toEqual('Brass 3');
      });
      
      it('When it has a level of 1, it has a list of skills', () => {
        let testCareer = new Scholar();
        expect(testCareer.Skills.length).toEqual(16);
        expect(testCareer.Skills[0].Description).toEqual("Consume Alcohol");
      });
      
      it('When it has a level of 2, it has a Career Path of Scholar', () => {
        let testCareer = new Scholar();        
        testCareer.Level = 2;
        expect(testCareer.CareerPath).toEqual('Scholar');
        expect(testCareer.Status).toEqual('Silver 2');
      });
      
      it('When it has a level of 3, it has a Career Path of Fellow', () => {
        let testCareer = new Scholar();        
        testCareer.Level = 3;
        expect(testCareer.CareerPath).toEqual('Fellow');
        expect(testCareer.Status).toEqual('Silver 5');
      });
      
      it('When it has a level of 4, it has a Career Path of Professor', () => {
        let testCareer = new Scholar();        
        testCareer.Level = 4;
        expect(testCareer.CareerPath).toEqual('Professor');
        expect(testCareer.Status).toEqual('Gold 1');
      });

      it('When it has a level of 1, it has 3 characteristics to advance', () => {
        let testCareer = new Scholar();
        expect(testCareer.Level).toEqual(1);
        expect(testCareer.Characteristics.length).toEqual(3);
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Toughness)).toBeTruthy("Missing Characteristic Toughness");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Intelligence)).toBeTruthy("Missing Characteristic Intelligence");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Willpower)).toBeTruthy("Missing Characteristic Willpower");
      });
      
      it('When it has a level of 2, it has 4 characteristics to advance', () => {
        let testCareer = new Scholar();
        testCareer.Level = 2;
        expect(testCareer.Level).toEqual(2);
        expect(testCareer.Characteristics.length).toEqual(4);
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Toughness)).toBeTruthy("Missing Characteristic Toughness");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Intelligence)).toBeTruthy("Missing Characteristic Intelligence");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Willpower)).toBeTruthy("Missing Characteristic Willpower");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Initiative)).toBeTruthy("Missing Characteristic Initiative");
      });
            
      it('When it has a level of 3, it has 5 characteristics to advance', () => {
        let testCareer = new Scholar();
        testCareer.Level = 3;
        expect(testCareer.Level).toEqual(3);
        expect(testCareer.Characteristics.length).toEqual(5);
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Toughness)).toBeTruthy("Missing Characteristic Toughness");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Intelligence)).toBeTruthy("Missing Characteristic Intelligence");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Willpower)).toBeTruthy("Missing Characteristic Willpower");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Initiative)).toBeTruthy("Missing Characteristic Initiative");        
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Fellowship)).toBeTruthy("Missing Characteristic Fellowship");
      });      
            
      it('When it has a level of 4, it has 6 characteristics to advance', () => {
        let testCareer = new Scholar();
        testCareer.Level = 4;
        expect(testCareer.Level).toEqual(4);
        expect(testCareer.Characteristics.length).toEqual(6);
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Toughness)).toBeTruthy("Missing Characteristic Toughness");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Intelligence)).toBeTruthy("Missing Characteristic Intelligence");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Willpower)).toBeTruthy("Missing Characteristic Willpower");
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Initiative)).toBeTruthy("Missing Characteristic Initiative");        
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Fellowship)).toBeTruthy("Missing Characteristic Fellowship");                
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Dexterity)).toBeTruthy("Missing Characteristic Dexterity");
      });

      //careers have levels
      // each level has :
      // a skills list
      // a talents list
      // a trappings list
      // an advance scheme of characteristics
      // // at level 1 it is 3 characteristics
      // // level 2 it is 4
      // // level 3 it is 5
      // // level 4 it is 6
      // // at level 1 everything must be advanced by 5
      // // at level 2 everything must be advanced by 10
      // // at level 3 everything must be advanced by 15
      // // at level 4 everything must be advanced by 20
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
