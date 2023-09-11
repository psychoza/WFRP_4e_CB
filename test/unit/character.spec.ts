import { Career } from '../../src/objects/career';
import { Character } from '../../src/objects/character';
import { SkillLibrary } from '../../src/objects/skillLibrary';
import { CharacteristicType } from '../../src/objects/characteristicType';
import { WoodElf } from "../../src/objects/species/woodElf";

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
    expect(c.InitialScore).toBeDefined();
    expect(c.InitialScore).toEqual(c.StartingScore + c.SpeciesScore);
    expect(c.TotalScore).toEqual(c.StartingScore + c.SpeciesScore + c.Advances);
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
      expect(character.WeaponSkill.TotalScore).toBe(30);
      expect(character.BallisticSkill.TotalScore).toBe(30);
      expect(character.Strength.TotalScore).toBe(30);
      expect(character.Toughness.TotalScore).toBe(30);
      expect(character.Initiative.TotalScore).toBe(30);
      expect(character.Agility.TotalScore).toBe(30);
      expect(character.Dexterity.TotalScore).toBe(30);
      expect(character.Intelligence.TotalScore).toBe(30);
      expect(character.Willpower.TotalScore).toBe(30);
      expect(character.Fellowship.TotalScore).toBe(30);

      expect(character.Fate).toEqual(2);
      expect(character.Fortune).toEqual(2);
      expect(character.Resilience).toEqual(1);
      expect(character.Resolve).toEqual(1);
      expect(character.ExtraPoints).toEqual(3);
      expect(character.Movement).toEqual(4);

      let strengthBonus = character.Strength.ScoreBonus;
      let toughnessBonus = character.Toughness.ScoreBonus;
      let willpowerBonus = character.Willpower.ScoreBonus;
      let expectedWounds = strengthBonus + (2 * toughnessBonus) + willpowerBonus;
      expect(character.Wounds).toEqual(expectedWounds);
    });

    it('has attributes of a halfling', () => {
      setFakePercentileDiceResult(91);
      setFakeSumDicResult(10);
      character.rollANewCharacter();
      expect(character.Species.Description).toBe('Halfling');
      expect(character.WeaponSkill.TotalScore).toBe(20);
      expect(character.BallisticSkill.TotalScore).toBe(40);
      expect(character.Strength.TotalScore).toBe(20);
      expect(character.Toughness.TotalScore).toBe(30);
      expect(character.Initiative.TotalScore).toBe(30);
      expect(character.Agility.TotalScore).toBe(30);
      expect(character.Dexterity.TotalScore).toBe(40);
      expect(character.Intelligence.TotalScore).toBe(30);
      expect(character.Willpower.TotalScore).toBe(40);
      expect(character.Fellowship.TotalScore).toBe(40);

      expect(character.Fate).toEqual(0);
      expect(character.Fortune).toEqual(0);
      expect(character.Resilience).toEqual(2);
      expect(character.Resolve).toEqual(2);
      expect(character.ExtraPoints).toEqual(3);
      expect(character.Movement).toEqual(3);

      let strengthBonus = character.Strength.ScoreBonus;
      let toughnessBonus = character.Toughness.ScoreBonus;
      let willpowerBonus = character.Willpower.ScoreBonus;
      let expectedWounds = (2 * toughnessBonus) + willpowerBonus;
      expect(character.Wounds).toEqual(expectedWounds);
    });

    it('has attributes of a dwarf', () => {
      setFakePercentileDiceResult(95);
      setFakeSumDicResult(10);
      character.rollANewCharacter();
      expect(character.Species.Description).toBe('Dwarf');
      expect(character.WeaponSkill.TotalScore).toBe(40);
      expect(character.BallisticSkill.TotalScore).toBe(30);
      expect(character.Strength.TotalScore).toBe(30);
      expect(character.Toughness.TotalScore).toBe(40);
      expect(character.Initiative.TotalScore).toBe(30);
      expect(character.Agility.TotalScore).toBe(20);
      expect(character.Dexterity.TotalScore).toBe(40);
      expect(character.Intelligence.TotalScore).toBe(30);
      expect(character.Willpower.TotalScore).toBe(50);
      expect(character.Fellowship.TotalScore).toBe(20);

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
      expect(character.WeaponSkill.TotalScore).toBe(40);
      expect(character.BallisticSkill.TotalScore).toBe(40);
      expect(character.Strength.TotalScore).toBe(30);
      expect(character.Toughness.TotalScore).toBe(30);
      expect(character.Initiative.TotalScore).toBe(50);
      expect(character.Agility.TotalScore).toBe(40);
      expect(character.Dexterity.TotalScore).toBe(40);
      expect(character.Intelligence.TotalScore).toBe(40);
      expect(character.Willpower.TotalScore).toBe(40);
      expect(character.Fellowship.TotalScore).toBe(30);

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
      expect(character.WeaponSkill.TotalScore).toBe(40);
      expect(character.BallisticSkill.TotalScore).toBe(40);
      expect(character.Strength.TotalScore).toBe(30);
      expect(character.Toughness.TotalScore).toBe(30);
      expect(character.Initiative.TotalScore).toBe(50);
      expect(character.Agility.TotalScore).toBe(40);
      expect(character.Dexterity.TotalScore).toBe(40);
      expect(character.Intelligence.TotalScore).toBe(40);
      expect(character.Willpower.TotalScore).toBe(40);
      expect(character.Fellowship.TotalScore).toBe(30);

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

    it('has a list of skills inherent to humans', () => {
      setFakeSumDicResult(10);
      setFakePercentileDiceResult(1);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('Human');
      expect(character.Species.Skills).toBeDefined();
      expect(character.Species.Skills.length).toEqual(12);
    });

    it('has a list of skills inherent to dwarves', () => {
      setFakeSumDicResult(10);
      setFakePercentileDiceResult(96);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('Dwarf');
      expect(character.Species.Skills).toBeDefined();
      expect(character.Species.Skills.length).toEqual(19);
    });

    it('has a list of skills inherent to halflings', () => {
      setFakeSumDicResult(10);
      setFakePercentileDiceResult(92);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('Halfling');
      expect(character.Species.Skills).toBeDefined();
      expect(character.Species.Skills.length).toEqual(12);
    });

    it('has a list of skills inherent to high elves', () => {
      setFakeSumDicResult(10);
      setFakePercentileDiceResult(99);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('High Elf');
      expect(character.Species.Skills).toBeDefined();
      expect(character.Species.Skills.length).toEqual(11);
    });

    it('has a list of skills inherent to wood elves', () => {
      setFakeSumDicResult(10);
      setFakePercentileDiceResult(100);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('Wood Elf');
      expect(character.Species.Skills).toBeDefined();
      expect(character.Species.Skills.length).toEqual(12);
    });
  });

  describe('Class / Career - ', () => {
    it('has a random Class and Career of Academics - Scholar', () => {
      setFakePercentileDiceResult(12);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('Human');
      expect(character.Career.Description).toEqual("Scholar");
      expect(character.Class.Description).toEqual("Academics");
      expect(character.Career.Level).toEqual(1);      
      expect(character.Career.CareerPath).toEqual("Student");
    });

    it('as a Academic Scholar Student it knows which characteristics can be advanced', () => {
      setFakePercentileDiceResult(12);
      character.rollANewCharacter();
      expect(character.Species.Description).toEqual('Human');
      expect(character.Career.Description).toEqual("Scholar");
      expect(character.Class.Description).toEqual("Academics");
      expect(character.Career.Level).toEqual(1);      
      expect(character.Career.CareerPath).toEqual("Student");
      expect(character.Intelligence.CanBeAdvanced).toEqual(true);
      expect(character.Toughness.CanBeAdvanced).toEqual(true);
      expect(character.Willpower.CanBeAdvanced).toEqual(true);
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
    // +20 for random species
    // +50 for random career
    // // +25 for one of 3 random careers
    // +50 for random characteristics
    // // +25 for swapped characteristics

    it('has experience', () => {
      character.rollANewCharacter();
      expect(character.Experience).toBeDefined();
    });

    it('has 20 experience while having the random species', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();      
      character.WeaponSkill.StartingScore = 1;
      character.swapCharacteristics(character.WeaponSkill, character.BallisticSkill);
      character.selectCareer(new Career());
      expect(character.Experience).toBe(20);
    });

    it('has 0 experience while having a specified species', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();
      character.WeaponSkill.StartingScore = 1;
      character.swapCharacteristics(character.WeaponSkill, character.BallisticSkill);
      character.selectSpecies(new WoodElf());
      character.selectCareer(new Career());
      expect(character.Experience).toBe(0);
    });

    it('has 50 experience while using the random characteristics', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();
      character.selectSpecies(new WoodElf());
      character.selectCareer(new Career());
      expect(character.Experience).toBe(50);
    });

    it('has 50 experience while using the random class / career', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();
      character.WeaponSkill.StartingScore = 1;
      character.swapCharacteristics(character.WeaponSkill, character.BallisticSkill);
      character.selectSpecies(new WoodElf());
      expect(character.Experience).toBe(50);
    });
    
    it('has 0 experience while not using the random class / career', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();
      character.WeaponSkill.StartingScore = 1;
      character.swapCharacteristics(character.WeaponSkill, character.BallisticSkill);
      character.selectSpecies(new WoodElf());
      character.selectCareer(new Career());
      expect(character.Experience).toBe(0);
    });

    it('has spent experience', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();      
      expect(character.SpentExperience).toBe(0);
    });

    
    it('has spent experience', () => {
      setFakePercentileDiceResult(90);
      character.rollANewCharacter();
      character.SpentExperience = 25;
      expect(character.CurrentExperience).toBe(character.Experience - character.SpentExperience);
    });
  });
  
  describe('Skills - ', () => {
    it('can calculate a skills level on characteristic', () => {
      character.rollANewCharacter();
      let skillType = character.Skills[0].CharacteristicType;
      let characteristic = character.Characteristics.find((c)=> { return c.CharacteristicType === skillType; });
      expect(character.getSkillLevel(character.Skills[0])).toEqual(characteristic.TotalScore);
    });
    
    it('can calculate a skills level on advances', () => {
      character.rollANewCharacter();
      let advances = 10;
      character.Skills[0].Advances = advances;
      let skillType = character.Skills[0].CharacteristicType;
      let characteristic = character.Characteristics.find((c)=> { return c.CharacteristicType === skillType; });
      expect(character.getSkillLevel(character.Skills[0])).toEqual(characteristic.TotalScore + advances);
    });

    it('has more skills from the random Class and Career of Academics - Scholar', () => {
      setFakePercentileDiceResult(12);
      character.rollANewCharacter();
      expect(character.Career.Description).toEqual("Scholar");
      expect(character.Skills.length).toBeGreaterThan(SkillLibrary.BasicSkills.length);
      expect(character.Skills.length).toEqual(44);
      expect(character.Skills.some((s) => { return s.Description === "Research"})).toBeTruthy();      
      expect(character.Skills.filter((s) => { return s.Description === "Consume Alcohol"}).length).toEqual(1);
    });
  });
});
