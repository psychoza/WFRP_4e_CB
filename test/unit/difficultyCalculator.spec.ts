import {DifficultyCalculator} from "../../src/difficultyCalculator";
import {ActionType, Challenges, ModifierGroup} from "../../src/objects/challenges";

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
      expect(Challenges.challenges).toBeDefined();
    });

    const rangedChallenges = Challenges.challenges
        .filter((c) => { 
          return c.actionType == ActionType.RangedAttack; 
        });

    it('has 21 ranged attack challenges', () => {
      expect(rangedChallenges.length).toEqual(21);
    });

    const meleeChallenges = Challenges.challenges
        .filter((c) => {
          return c.actionType == ActionType.MeleeAttack;
        });

    it('has 11 melee attack challenges', () => {
      expect(meleeChallenges.length).toEqual(11);
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
      const monstrousTargetChallenge = Challenges.challenges.find((c) => {
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
      const monstrousTargetChallenge = Challenges.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == 60;
      });
      const enormousTargetChallenge = Challenges.challenges.find((c) => {
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
      const monstrousTargetChallenge = Challenges.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == 60;
      });
      const pointBlankChallenge = Challenges.challenges.find((c) => {
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
      const tinyTargetChallenge = Challenges.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == -30;
      });
      const extremeChallenge = Challenges.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetDistance &&
            c.modifier == -30;
      });
      calculator.selectChallenge(tinyTargetChallenge);
      calculator.selectChallenge(extremeChallenge);
      expect(calculator.selectedChallenges.length).toEqual(2);
      expect(calculator.challengeScore).toEqual(-30);
    });

    it('when adding ranged challenge and then melee expect only the melee to remain - ', () => {
      const monstrousTargetChallenge = Challenges.challenges.find((c) => {
        return c.actionType == ActionType.RangedAttack &&
            c.modifierGroup == ModifierGroup.RangedTargetSize &&
            c.modifier == 60;
      });
      const meleeDarkChallenge = Challenges.challenges.find((c) => {
        return c.actionType == ActionType.MeleeAttack &&
            c.modifierGroup == ModifierGroup.MeleeDarkness;
      });
      calculator.selectChallenge(monstrousTargetChallenge);
      calculator.selectChallenge(meleeDarkChallenge);
      expect(calculator.selectedChallenges.length).toEqual(1);
      expect(calculator.challengeScore).toEqual(-20);
    });
  });
});
