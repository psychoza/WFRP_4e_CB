import {Character} from '../../src/character';
import { WoodElf } from '../../src/species.woodelf';

describe('Character - ', () => {
  let character: Character = null;
  beforeEach(() => {
    character = new Character();
  })
  
  let setFakeSumDicResult = (rollResult:number) => {
    character.rollSum = () => {
      return rollResult;
    };
  };
  
  let setFakePercentileDiceResult = (rollResult:number) => {
    character.rollPercentile = () => {
      return rollResult;
    };
  };

  it('has a name', () => {
    expect(character.Name).toBeDefined();    
  });

  it('has a species', () => {
    expect(character.Species).toBeDefined();    
  });

  it('has the human species by default', () => {
    expect(character.Species.Description).toBe('Human');
  });

  it('has characteristics', () => {
    expect(character.WeaponSkill).toBeDefined();
    expect(character.BallisticSkill).toBeDefined();
    expect(character.Strength).toBeDefined();
    expect(character.Toughness).toBeDefined();
    expect(character.Initiative).toBeDefined();
    expect(character.Agility).toBeDefined();
    expect(character.Dexterity).toBeDefined();
    expect(character.Intelligence).toBeDefined();
    expect(character.Willpower).toBeDefined();
    expect(character.Fellowship).toBeDefined();
  });

  it('has the ability to be other Species as defined by a roll', () => {
    setFakePercentileDiceResult(90);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('Human');
    setFakePercentileDiceResult(94);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('Halfling');
    setFakePercentileDiceResult(98);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('Dwarf');
    setFakePercentileDiceResult(99);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('High Elf');
    setFakePercentileDiceResult(100);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('Wood Elf');
  });

  it('has its species roll stored so it can be seen how likely you are to be human', () => {
    setFakePercentileDiceResult(1);
    character.rollANewCharacter();
    expect(character.SpeciesRoll).toBe(1);
    setFakePercentileDiceResult(100);
    character.rollANewCharacter();
    expect(character.SpeciesRoll).toBe(100);
  });

  it('has characteristics all set to 10 by default the average of 5 + 5, plus 20 for being a human', () => {
    setFakeSumDicResult(10);
    setFakePercentileDiceResult(1);
    character.rollANewCharacter();
    expect(character.WeaponSkill.GetTotalScore()).toBe(30);
    expect(character.BallisticSkill.GetTotalScore()).toBe(30);
    expect(character.Strength.GetTotalScore()).toBe(30);
    expect(character.Toughness.GetTotalScore()).toBe(30);
    expect(character.Initiative.GetTotalScore()).toBe(30);
    expect(character.Agility.GetTotalScore()).toBe(30);
    expect(character.Dexterity.GetTotalScore()).toBe(30);
    expect(character.Intelligence.GetTotalScore()).toBe(30);
    expect(character.Willpower.GetTotalScore()).toBe(30);
    expect(character.Fellowship.GetTotalScore()).toBe(30);
  });

  it('has a bonus to characteristics for being a halfling', () => {
    setFakePercentileDiceResult(91);
    setFakeSumDicResult(10);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('Halfling');
    expect(character.WeaponSkill.GetTotalScore()).toBe(20);
    expect(character.BallisticSkill.GetTotalScore()).toBe(40);
    expect(character.Strength.GetTotalScore()).toBe(20);
    expect(character.Toughness.GetTotalScore()).toBe(30);
    expect(character.Initiative.GetTotalScore()).toBe(30);
    expect(character.Agility.GetTotalScore()).toBe(30);
    expect(character.Dexterity.GetTotalScore()).toBe(40);
    expect(character.Intelligence.GetTotalScore()).toBe(30);
    expect(character.Willpower.GetTotalScore()).toBe(40);
    expect(character.Fellowship.GetTotalScore()).toBe(40);
  });

  it('has a bonus to characteristics for being a dwarf', () => {
    setFakePercentileDiceResult(95);
    setFakeSumDicResult(10);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('Dwarf');
    expect(character.WeaponSkill.GetTotalScore()).toBe(40);
    expect(character.BallisticSkill.GetTotalScore()).toBe(30);
    expect(character.Strength.GetTotalScore()).toBe(30);
    expect(character.Toughness.GetTotalScore()).toBe(40);
    expect(character.Initiative.GetTotalScore()).toBe(30);
    expect(character.Agility.GetTotalScore()).toBe(20);
    expect(character.Dexterity.GetTotalScore()).toBe(40);
    expect(character.Intelligence.GetTotalScore()).toBe(30);
    expect(character.Willpower.GetTotalScore()).toBe(50);
    expect(character.Fellowship.GetTotalScore()).toBe(20);
  });

  it('has a bonus to characteristics for being a high elf', () => {
    setFakePercentileDiceResult(99);
    setFakeSumDicResult(10);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('High Elf');
    expect(character.WeaponSkill.GetTotalScore()).toBe(40);
    expect(character.BallisticSkill.GetTotalScore()).toBe(40);
    expect(character.Strength.GetTotalScore()).toBe(30);
    expect(character.Toughness.GetTotalScore()).toBe(30);
    expect(character.Initiative.GetTotalScore()).toBe(50);
    expect(character.Agility.GetTotalScore()).toBe(40);
    expect(character.Dexterity.GetTotalScore()).toBe(40);
    expect(character.Intelligence.GetTotalScore()).toBe(40);
    expect(character.Willpower.GetTotalScore()).toBe(40);
    expect(character.Fellowship.GetTotalScore()).toBe(30);
  });

  it('has a bonus to characteristics for being a wood elf', () => {
    setFakePercentileDiceResult(100);
    setFakeSumDicResult(10);
    character.rollANewCharacter();
    expect(character.Species.Description).toBe('Wood Elf');
    expect(character.WeaponSkill.GetTotalScore()).toBe(40);
    expect(character.BallisticSkill.GetTotalScore()).toBe(40);
    expect(character.Strength.GetTotalScore()).toBe(30);
    expect(character.Toughness.GetTotalScore()).toBe(30);
    expect(character.Initiative.GetTotalScore()).toBe(50);
    expect(character.Agility.GetTotalScore()).toBe(40);
    expect(character.Dexterity.GetTotalScore()).toBe(40);
    expect(character.Intelligence.GetTotalScore()).toBe(40);
    expect(character.Willpower.GetTotalScore()).toBe(40);
    expect(character.Fellowship.GetTotalScore()).toBe(30);
  });

  it('has the sum and percent to characteristic rolls so you can see how much RNG loves you', () => {
    setFakeSumDicResult(10);
    character.rollANewCharacter();
    expect(character.CharacteristicSum).toBe(100);
    expect(character.CharacteristicPct).toBe(50);
    setFakeSumDicResult(13);
    character.rollANewCharacter();
    expect(character.CharacteristicSum).toBe(130);
    expect(character.CharacteristicPct).toBe(65);
  });

  it('has the ability to use a a different species than the random one', () => {    
    setFakePercentileDiceResult(90);
    character.rollANewCharacter();    
    expect(character.RandomSpecies.Description).toBe("Human");
    expect(character.Species.Description).toBe("Human");
    character.selectSpecies(new WoodElf());
    expect(character.RandomSpecies.Description).toBe("Human");
    expect(character.Species.Description).toBe("Wood Elf");
  });
  
  it('has experience', () => {
    character.rollANewCharacter();
    expect(character.Experience).toBeDefined();
  });
  
  it('has 20 experience while having the random species', () => {
    setFakePercentileDiceResult(90);
    character.rollANewCharacter();
    character.WeaponSkill.StartingScore = 1;
    character.swapCharacteristics(character.WeaponSkill,character.BallisticSkill);
    expect(character.Experience).toBe(20);
  });
  
  it('has 0 experience while having a specified species', () => {
    setFakePercentileDiceResult(90);
    character.rollANewCharacter();
    character.WeaponSkill.StartingScore = 1;
    character.swapCharacteristics(character.WeaponSkill,character.BallisticSkill);
    character.selectSpecies(new WoodElf());
    expect(character.Experience).toBe(0);
  });

  it('has 50 experience while using the random characteristics', () => {
    setFakePercentileDiceResult(90);
    character.rollANewCharacter();
    character.selectSpecies(new WoodElf());
    expect(character.Experience).toBe(50);
  });  

  // xp
  // +50 for random class / career
  // +50 for random characteristics
  // +25 for moving random characteristics 

});
