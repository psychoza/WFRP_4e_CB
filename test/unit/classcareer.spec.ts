import { CharacteristicType } from '../../src/objects/characteristicType';
import {Academics, Rogues} from "../../src/objects/class";
import {Scholar} from "../../src/objects/careers/scholar";
import {Outlaw} from "../../src/objects/careers/outlaw";

//TODO: Each Class has a trappings list.
//TODO: Each Career has a trappings list.
//TODO: Starting Wealth based on your Class / Career status level
//    Brass: 2d10 brass pennies / status level
//    Silver 1d10 silver shillings / status level
//    Gold: 1 Gold crown / status level


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
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Toughness)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Intelligence)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Willpower)).toBeTruthy();
      });
      
      it('When it has a level of 2, it has 4 characteristics to advance', () => {
        let testCareer = new Scholar();
        testCareer.Level = 2;
        expect(testCareer.Level).toEqual(2);
        expect(testCareer.Characteristics.length).toEqual(4);
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Toughness)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Intelligence)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Willpower)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Initiative)).toBeTruthy();
      });
            
      it('When it has a level of 3, it has 5 characteristics to advance', () => {
        let testCareer = new Scholar();
        testCareer.Level = 3;
        expect(testCareer.Level).toEqual(3);
        expect(testCareer.Characteristics.length).toEqual(5);
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Toughness)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Intelligence)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Willpower)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Initiative)).toBeTruthy();        
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Fellowship)).toBeTruthy();
      });      
            
      it('When it has a level of 4, it has 6 characteristics to advance', () => {
        let testCareer = new Scholar();
        testCareer.Level = 4;
        expect(testCareer.Level).toEqual(4);
        expect(testCareer.Characteristics.length).toEqual(6);
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Toughness)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Intelligence)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Willpower)).toBeTruthy();
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Initiative)).toBeTruthy();        
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Fellowship)).toBeTruthy();                
        expect(testCareer.Characteristics.some((c) => c === CharacteristicType.Dexterity)).toBeTruthy();
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
