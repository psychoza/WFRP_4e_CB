import {DifficultyCalculator} from "../../src/difficultyCalculator";
import {ActionType, ModifierGroup} from "../../src/objects/challenges";

describe('Difficulty Calculator - ', () => {
  let calculator = new DifficultyCalculator();
  beforeEach(() => {
    calculator = new DifficultyCalculator();
  });

  it('has a challengeScore', () => {
    expect(calculator.challengeScore).toEqual(0);
  });
  
  describe('Challenges - ', () => {     
    it('has challenges', () => {
      expect(calculator.challenges).toBeDefined();
    });

    const rangedChallenges = calculator.challenges
        .filter((c) => { 
          return c.actionType == ActionType.RangedAttack; 
        });

    it('has 18 ranged attack challenges', () => {
      expect(rangedChallenges.length).toEqual(18);
    });
  });
  
  describe('Selected Challenges - ', () => {     
    it('has selected challenges', () => {
      expect(calculator.selectedChallenges).toBeDefined();
      expect(calculator.selectChallenge).toBeDefined();
    });

    beforeEach(() => {
      calculator.selectedChallenges = [];
    });
    
    it('when adding ranged target Monstrous expect score 60 - ', () => {
      const monstrousTargetChallenge = calculator.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == 60;
      });
      calculator.selectChallenge(monstrousTargetChallenge);
      expect(calculator.selectedChallenges.length).toEqual(1);
      expect(calculator.refreshComputed).toEqual(true);
      expect(calculator.challengeScore).toEqual(60);
    });
    
    it('when adding ranged target Monstrous and then Enormous expect score 40 - ', () => {
      const monstrousTargetChallenge = calculator.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == 60;
      });
      const enormousTargetChallenge = calculator.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == 40;
      });
      calculator.selectChallenge(monstrousTargetChallenge);
      calculator.selectChallenge(enormousTargetChallenge);
      expect(calculator.selectedChallenges.length).toEqual(1);
      expect(calculator.refreshComputed).toEqual(false);
      expect(calculator.challengeScore).toEqual(40);
    });

    it('when adding ranged target Monstrous and then range Point Blank expect score 60 - ', () => {
      const monstrousTargetChallenge = calculator.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == 60;
      });
      const pointBlankChallenge = calculator.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetDistance &&
            c.modifier == 40;
      });
      calculator.selectChallenge(monstrousTargetChallenge);
      calculator.selectChallenge(pointBlankChallenge);
      expect(calculator.selectedChallenges.length).toEqual(2);
      expect(calculator.challengeScore).toEqual(60);
    });

    it('when adding ranged target Tiny and then range Extreme expect score -30 - ', () => {
      const tinyTargetChallenge = calculator.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == -30;
      });
      const extremeChallenge = calculator.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetDistance &&
            c.modifier == -30;
      });
      calculator.selectChallenge(tinyTargetChallenge);
      calculator.selectChallenge(extremeChallenge);
      expect(calculator.selectedChallenges.length).toEqual(2);
      expect(calculator.challengeScore).toEqual(-30);
    });
  });
});
