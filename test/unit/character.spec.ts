import { Character } from '../../src/character';
import { WoodElf } from '../../src/species';
import { Academics, Rogues, Scholar, Outlaw } from '../../src/career';
import { SkillLibrary } from '../../src/skillLibrary';

describe('Character - ', () => {
  let character: Character = null;
  beforeEach(() => {
    character = new Character();
  })

  let setFakeSumDicResult = (rollResult: number) => {
    character.rollSum = () => {
      return rollResult;
    };
  };

  let setFakePercentileDiceResult = (rollResult: number) => {
    character.rollPercentile = () => {
      return rollResult;
    };
  };

  it('has a name', () => {
    expect(character.Name).toBeDefined();
  });

  it('has the human species by default', () => {
    expect(character.Species.Description).toBe('Human');
  });

  it('has characteristics', () => {
    character.rollANewCharacter();
    expect(character.Characteristics).toBeDefined();
    expect(character.Characteristics.length).toEqual(10);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.WeaponSkill }).CharacteristicType).toEqual(CharacteristicType.WeaponSkill);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.BallisticSkill }).CharacteristicType).toEqual(CharacteristicType.BallisticSkill);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Strength }).CharacteristicType).toEqual(CharacteristicType.Strength);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Toughness }).CharacteristicType).toEqual(CharacteristicType.Toughness);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Initiative }).CharacteristicType).toEqual(CharacteristicType.Initiative);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Agility }).CharacteristicType).toEqual(CharacteristicType.Agility);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Dexterity }).CharacteristicType).toEqual(CharacteristicType.Dexterity);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Intelligence }).CharacteristicType).toEqual(CharacteristicType.Intelligence);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Willpower }).CharacteristicType).toEqual(CharacteristicType.Willpower);
    expect(character.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Fellowship }).CharacteristicType).toEqual(CharacteristicType.Fellowship);
  });

  

  it('has keeps various scores separate', () => {
    character.rollANewCharacter();
    let c = character.Characteristics[0];
    c.Advances = 10;
    expect(c.GetInitialScore).toBeDefined();
    expect(c.GetInitialScore()).toEqual(c.StartingScore + c.SpeciesScore, "Initial Score did not equal the sum of starting score and species score");
    expect(c.GetTotalScore()).toEqual(c.StartingScore + c.SpeciesScore + c.Advances, "Total Score did not equal the sum of starting score, species score, and number of advances");
  });

  describe('Species - ', () => {
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

    it('has attributes of a human', () => {
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

      expect(character.Fate).toEqual(2);
      expect(character.Fortune).toEqual(2);
      expect(character.Resilience).toEqual(1);
      expect(character.Resolve).toEqual(1);
      expect(character.ExtraPoints).toEqual(3);
      expect(character.Movement).toEqual(4);
    });

    it('has attributes of a halfling', () => {
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

      expect(character.Fate).toEqual(0);
      expect(character.Fortune).toEqual(0);
      expect(character.Resilience).toEqual(2);
      expect(character.Resolve).toEqual(2);
      expect(character.ExtraPoints).toEqual(3);
      expect(character.Movement).toEqual(3);
    });

    it('has attributes of a dwarf', () => {
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

      expect(character.Fate).toEqual(0);
      expect(character.Fortune).toEqual(0);
      expect(character.Resilience).toEqual(2);
      expect(character.Resolve).toEqual(2);
      expect(character.ExtraPoints).toEqual(2);
      expect(character.Movement).toEqual(3);
    });

    it('has attributes of a high elf', () => {
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

      expect(character.Fate).toEqual(0);
      expect(character.Fortune).toEqual(0);
      expect(character.Resilience).toEqual(0);
      expect(character.Resolve).toEqual(0);
      expect(character.ExtraPoints).toEqual(2);
      expect(character.Movement).toEqual(5);
    });

    it('has attributes of a wood elf', () => {
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

      expect(character.Fate).toEqual(0);
      expect(character.Fortune).toEqual(0);
      expect(character.Resilience).toEqual(0);
      expect(character.Resolve).toEqual(0);
      expect(character.ExtraPoints).toEqual(2);
      expect(character.Movement).toEqual(5);
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
  });

  describe('Class / Career - ', () => {
    it('has a random Class and Career of Academics - Scholar', () => {
      setFakePercentileDiceResult(12);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('Human');
      expect(character.Career.Description).toEqual("Scholar");
      expect(character.Class.Description).toEqual("Academics");
    });


    it('has a random Class and Career of Rogues - Outlaw', () => {
      setFakePercentileDiceResult(80);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('Human');
      expect(character.Career.Description).toEqual("Outlaw");
      expect(character.Class.Description).toEqual("Rogues");
    });
  });

  describe('Experience - ', () => {
    it('has experience', () => {
      character.rollANewCharacter();
      expect(character.Experience).toBeDefined();
    });

    it('has 20 experience while having the random species', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();      
      character.WeaponSkill.StartingScore = 1;
      character.swapCharacteristics(character.WeaponSkill, character.BallisticSkill);
      expect(character.Experience).toBe(20);
    });

    it('has 0 experience while having a specified species', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();
      character.WeaponSkill.StartingScore = 1;
      character.swapCharacteristics(character.WeaponSkill, character.BallisticSkill);
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
  
  describe('Skills - ', () => {
    it('has skills', () => {
      character.rollANewCharacter();
      expect(character.Skills.length).toEqual(SkillLibrary.BasicSkills.length);
    });

    it('can calculate a skills level on characteristic', () => {
      character.rollANewCharacter();
      let skillType = character.Skills[0].CharacteristicType;
      let characteristic = character.Characteristics.find((c)=> { return c.CharacteristicType === skillType; });
      expect(character.getSkillLevel(character.Skills[0])).toEqual(characteristic.GetTotalScore());
    });
    
    it('can calculate a skills level on advances', () => {
      character.rollANewCharacter();
      let advances = 10;
      character.Skills[0].Advances = advances;
      let skillType = character.Skills[0].CharacteristicType;
      let characteristic = character.Characteristics.find((c)=> { return c.CharacteristicType === skillType; });
      expect(character.getSkillLevel(character.Skills[0])).toEqual(characteristic.GetTotalScore() + advances);
    });

    it('has a more skills from the random Class and Career of Academics - Scholar', () => {
      setFakePercentileDiceResult(12);
      character.rollANewCharacter();
      expect(character.Career.Description).toEqual("Scholar");
      expect(character.Skills.length).toBeGreaterThan(SkillLibrary.BasicSkills.length);
      expect(character.Skills.length).toEqual(38);
      expect(character.Skills.some((s) => { return s.Description === "Research"})).toBeTruthy();      
      expect(character.Skills.filter((s) => { return s.Description === "Consume Alcohol"}).length).toEqual(1);
    });
  });
});
