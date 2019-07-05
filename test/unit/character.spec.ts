import {Character} from '../../src/character';

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

  it('has the species score roll stored so the user can see their rng', () => {
    setFakePercentileDiceResult(1);
    character.rollANewCharacter();
    expect(character.SpeciesRoll).toBe(1);
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

  // xp
  // +20 for random species
  // +50 for random class / career
  // +50 for random characteristics
  // +25 for moving random characteristics 

});








/*
using CoreLibrary;
using CoreLibrary.WarhammerFantasyRolePlay;
using CoreLibraryTests.Fakes;
using NUnit.Framework;
using System.Linq;

namespace CoreLibraryTests.WarhammerFantasyRolePlay
{
    public class CreateACharacter_Tests
    {
        private FakeRandomEngine _fakeRandom;

        [SetUp]
        public void SetUp()
        {
            SetRandomRollerRepeatingResult(5);
        }

        private void SetRandomRollerRepeatingResult(int result)
        {
            _fakeRandom = new FakeRandomEngine();
            _fakeRandom.RepeatLastNumber = true;
            _fakeRandom.RandomNumbers.Add(result);

            CoreRandom.GetInstance(_fakeRandom);
        }

        private void SetRandomRollerResults(int[] results)
        {
            _fakeRandom = new FakeRandomEngine();
            _fakeRandom.RepeatLastNumber = false;
            foreach (int result in results)
            {
                _fakeRandom.RandomNumbers.Add(result);
            }

            CoreRandom.GetInstance(_fakeRandom);
        }

        [Test]
        public void ItExists()
        {
            var example = new Character();
        }

        [Test]
        public void ItHasASpeciesWhichIsHumanByDefault()
        {
            var example = new Character();

            Assert.AreEqual("Human", example.Species.ToString());
        }

        [Test]
        public void ItCanOnlyHaveBaseScoresOfTwoToTwenty()
        {
            var example = new Character();
            Assert.IsTrue(example.Strength.BaseScore >= 2);
            Assert.IsTrue(example.Strength.BaseScore <= 20);
        }

        [Test]
        public void WhenItHasASpeciesOfHumanAllAttributesAreImprovedBy20()
        {
            var example = new Character();

            Assert.AreEqual("Human", example.Species.ToString());
            Assert.AreEqual(30, example.WeaponSkill.Score);
            Assert.AreEqual(30, example.Strength.Score);
            Assert.AreEqual(30, example.Toughness.Score);
            Assert.AreEqual(30, example.Willpower.Score);
        }

        [Test]
        public void WhenItHasAnAttributeWithAScoreOf30ItHasABonusOf3()
        {
            _fakeRandom = new FakeRandomEngine();
            _fakeRandom.RepeatLastNumber = true;
            _fakeRandom.RandomNumbers.Add(8);

            CoreRandom.GetInstance(_fakeRandom);

            var example = new Character();
            Assert.AreEqual(36, example.WeaponSkill.Score);
            Assert.AreEqual(3, example.WeaponSkill.Bonus);
        }

        [Test]
        public void ItHasAWoundsValueBasedOnStrengthToughnessAndWillpower()
        {
            var strengthBonus = 3;
            var toughnessBonus = 3;
            var willpowerBonus = 3;
            var expectedWoundsScore = strengthBonus + (2 * toughnessBonus) + willpowerBonus;


            var example = new Character();
            Assert.AreEqual(3, example.Strength.Bonus);
            Assert.AreEqual(3, example.Toughness.Bonus);
            Assert.AreEqual(3, example.Willpower.Bonus);
            Assert.AreEqual(expectedWoundsScore, example.Wounds);
        }

        [Test]
        public void ItCanTakeDamageAndWoundsReflectThatDamage()
        {
            var example = new Character();
            example.TakeDamage(2, HitLocation.Head);

            Assert.AreEqual(11, example.Wounds);
        }

        [Test]
        public void DamageTakenIsReducedByItsToughnessToAMinimumOfOne()
        {
            var example = new Character();
            example.TakeDamage(2, HitLocation.Head);
            Assert.AreEqual(11, example.Wounds);

            example.TakeDamage(5, HitLocation.Head);
            Assert.AreEqual(9, example.Wounds);
        }

        [Test]
        public void WhenTakingDamageWoundsCanNeverBeBelowZero()
        {
            var example = new Character();
            example.TakeDamage(100, HitLocation.Head);

            Assert.AreEqual(0, example.Wounds);
        }

        [Test]
        public void WhenTakingDamageThatWouldDropMeToOrBelowZeroThenAddCriticalWounds()
        {
            var example = new Character();
            Assert.AreEqual(12, example.Wounds);
            Assert.AreEqual(3, example.Toughness.Bonus);

            example.TakeDamage(15, HitLocation.Head);
            Assert.AreEqual(0, example.Wounds);

            example.TakeDamage(1, HitLocation.Head);
            Assert.AreEqual(0, example.Wounds);

            Assert.AreEqual(2, example.CriticalWounds);
        }

        [Test]
        public void WhenAtZeroWoundsAndCriticalWoundsAreMoreThanYourToughnessBonusYouAreDead()
        {
            var example = new Character();
            Assert.AreEqual(12, example.Wounds);
            Assert.AreEqual(3, example.Toughness.Bonus);

            example.TakeDamage(15, HitLocation.Head);
            Assert.AreEqual(0, example.Wounds);

            example.TakeDamage(1, HitLocation.Head);
            example.TakeDamage(1, HitLocation.Head);
            Assert.AreEqual(0, example.Wounds);
            Assert.AreEqual(3, example.CriticalWounds);
            Assert.AreEqual(3, example.Toughness.Bonus);
            Assert.AreEqual(false, example.IsDead);

            example.TakeDamage(1, HitLocation.Head);
            Assert.AreEqual(4, example.CriticalWounds);
            Assert.AreEqual(true, example.IsDead);
        }

        [Test]
        public void ItHasAMeleeSkillEqualToTheTotalWeaponSkillScore()
        {
            var example = new Character();

            Assert.AreEqual(example.WeaponSkill.Score, example.MeleeSkill);
        }

        [Test]
        public void ItsMeleeSkillCanHaveAdvancesToGiveItAHigherSkillLevel()
        {
            var example = new Character();
            example.AdvanceSkill(SkillType.Melee, 1);
            Assert.AreEqual(example.WeaponSkill.Score + 1, example.MeleeSkill);
        }

        [Test]
        public void ItCanRollAMeleeSkillTestToDetermineASuccessLevel()
        {
            var example = new Character();
            var successLevel = example.MakeSkillTest(SkillType.Melee, 11);
            Assert.AreEqual(1, successLevel);

            example.AdvanceSkill(SkillType.Melee, 30);
            successLevel = example.MakeSkillTest(SkillType.Melee, 11);
            Assert.AreEqual(4, successLevel);
        }
        
        [Test]
        public void ItCanAttackAnEnemy()
        {
            var example = new Character();
            var enemy = new Character();
            SetRandomRollerResults(new int[] { 1, 0, 3, 0 });
            var previousWounds = enemy.Wounds;

            example.Attack(enemy);

            Assert.AreNotEqual(previousWounds, enemy.Wounds);
        }

        [Test]
        public void ItAddsStrengthBonusToDamage()
        {
            var example = new Character();
            var enemy = new Character();
            SetRandomRollerResults(new int[] { 1, 0, 3, 0 });
            var targetWounds = enemy.Wounds - 2;

            example.Attack(enemy);

            Assert.AreEqual(targetWounds, enemy.Wounds);
        }

        [Test]
        public void ItCanFendOffAnAttack()
        {
            var example = new Character();
            var enemy = new Character();
            SetRandomRollerResults(new int[] { 1, 0, 1, 0 });
            var targetWounds = example.Wounds;

            enemy.Attack(example);

            Assert.AreEqual(30, enemy.MeleeSkill);
            Assert.AreEqual(30, example.MeleeSkill);
            Assert.AreEqual(targetWounds, example.Wounds);
        }

        [Test]
        public void ItCanPressItsAdvantageOnSubsequentAttacks()
        {
            var example = new Character();
            var enemy = new Character();        
            SetRandomRollerResults(new int[] { 1, 0, 2, 0, 2, 0, 3, 0 });
            var targetWounds = example.Wounds - 2;

            example.Attack(enemy);
            Assert.AreEqual(targetWounds, enemy.Wounds);
            Assert.AreEqual(40, example.MeleeSkill);

            targetWounds = enemy.Wounds - 2;
            example.Attack(enemy);
            Assert.AreEqual(targetWounds, enemy.Wounds);
        }

        [Test]
        public void ItsAdvantageDoesGainAdvntageWhenTheSuccessLevelIsTheSameAsTheDefenders()
        {
            var example = new Character();
            var enemy = new Character();
            SetRandomRollerResults(new int[] { 1, 0, 2, 0, 4, 0, 3, 0 });
            var targetWounds = example.Wounds - 2;

            example.Attack(enemy);
            Assert.AreEqual(targetWounds, enemy.Wounds);
            Assert.AreEqual(40, example.MeleeSkill);

            example.Attack(enemy);
            Assert.AreEqual(targetWounds, enemy.Wounds);
            Assert.AreEqual(40, example.MeleeSkill);

        }

        [Test]
        public void ItCanLoseItsAdvantageWhenTakingDamage()
        {
            var example = new Character();
            var enemy = new Character();
            SetRandomRollerResults(new int[] { 1, 0, 2, 0, 1, 0, 3, 0 });
            var targetWounds = enemy.Wounds - 2;

            example.Attack(enemy);
            Assert.AreEqual(40, example.MeleeSkill);
            Assert.AreEqual(targetWounds, enemy.Wounds);

            targetWounds = example.Wounds - 2;
            enemy.Attack(example);            
            Assert.AreEqual(targetWounds, example.Wounds);
            Assert.AreEqual(30, example.MeleeSkill);
        }

        [Test]
        public void ItCanLandACriticalHit()
        {
            var example = new Character();
            var enemy = new Character();
            SetRandomRollerResults(new int[] { 2, 2, 5, 0 });

            example.Attack(enemy);
            Assert.AreEqual(1, enemy.CriticalWounds);
        }

        [Test]
        public void ItCanBeHitInALocation()
        {            
            var example = new Character();            
            example.TakeDamage(1, HitLocation.Head);
            Assert.AreEqual(11, example.Wounds);
        }

        [Test]
        public void WhenGettingHitItTracksTheDamageAndWhereSoItCanReflectOnThis()
        {            
            var example = new Character();
            var enemy = new Character();

            SetRandomRollerResults(new int[] { 1, 0, 2, 0, 1, 0, 3, 0 });
            
            example.Attack(enemy);

            Assert.AreEqual(1, enemy.DamageHistory.Count);
            Assert.AreEqual(HitLocation.Head, enemy.DamageHistory.First().HitLocation);
            Assert.AreEqual(2, enemy.DamageHistory.First().Damage);
        }

        [Test]
        public void WhenTakingDamageItAddsTheHitToALog()
        {            
            var example = new Character();
            var enemy = new Character();

            SetRandomRollerResults(new int[] { 1, 2, 2, 3, 1, 0, 3, 0 });
            
            example.Attack(enemy);
            example.Attack(enemy);

            Assert.AreEqual(2, enemy.DamageHistory.Count);
            Assert.AreEqual(HitLocation.LeftArm, enemy.DamageHistory.First().HitLocation);
            Assert.AreEqual(1, enemy.DamageHistory.First().Damage);
            Assert.AreEqual(HitLocation.Head, enemy.DamageHistory.Last().HitLocation);
            Assert.AreEqual(3, enemy.DamageHistory.Last().Damage);
        }
        
        [Test]
        public void ItCanEquipAHelmet()
        {
            var example = new Character();
            var skullcap = GrungnisFavorManager.CraftArmour().ThatProtects(HitLocation.Head).ThatReduces(1);
            example.Equip(skullcap);
            Assert.AreSame(example.Equipment.Head, skullcap);
        }
        
        [Test]
        public void WhileWearingAHelmetItCanReduceItsDamageTaken()
        {
            var example = new Character();
            var enemy = new Character();
            var skullcap = GrungnisFavorManager.CraftArmour().ThatProtects(HitLocation.Head).ThatReduces(1);
            example.Equip(skullcap);
            var previousWounds = example.Wounds;
            
            SetRandomRollerResults(new int[] { 2, 0, 3, 0 });
                        
            enemy.Attack(example);

            Assert.AreEqual(1, example.DamageHistory.Count);
            Assert.AreEqual(HitLocation.Head, example.DamageHistory[0].HitLocation);
            Assert.AreEqual(0, example.DamageHistory.First().Damage);
            Assert.AreEqual(previousWounds, example.Wounds);
        }

        [Test]
        public void ArmourPreventsCriticalWoundsIfDamageIsReducedToZero()
        {
            var example = new Character();
            example.TakeDamage(15, HitLocation.Head);
            var enemy = new Character();
            var skullcap = GrungnisFavorManager.CraftArmour().ThatProtects(HitLocation.Head).ThatReduces(1);
            example.Equip(skullcap);
            var previousWounds = example.Wounds;
            
            SetRandomRollerResults(new int[] { 2, 0, 3, 0 });

            enemy.Attack(example);

            Assert.AreEqual(2, example.DamageHistory.Count);
            Assert.AreEqual(HitLocation.Head, example.DamageHistory[1].HitLocation);
            Assert.AreEqual(0, example.DamageHistory[1].Damage);
            Assert.AreEqual(previousWounds, example.Wounds);
            Assert.AreEqual(1, example.CriticalWounds);
        }

        [Test]
        public void ItCanBlockALotOfDamageAndOnlyLogItAs0()
        {
            var example = new Character();
            var bodySuit = GrungnisFavorManager.CraftArmour().ThatProtects(HitLocation.Head, HitLocation.Body, HitLocation.LeftArm, HitLocation.RightArm, HitLocation.LeftLeg, HitLocation.RightLeg).ThatReduces(10);
            example.Equip(bodySuit);
            
            var enemy = new Character();

            SetRandomRollerResults(new int[] { 5, 5, 0, 0 });
            enemy.Attack(example);
            Assert.AreEqual(HitLocation.Body, example.DamageHistory.Last().HitLocation);
            Assert.AreEqual(0, example.DamageHistory.Last().Damage);
        }

        [Test]
        public void ItCanEquipAFullBodySuitAndBlockHitsToAllPartsOfTheBody()
        {
            var example = new Character();
            var bodySuit = GrungnisFavorManager.CraftArmour().ThatProtects(HitLocation.Head, HitLocation.Body, HitLocation.LeftArm, HitLocation.RightArm, HitLocation.LeftLeg, HitLocation.RightLeg).ThatReduces(10);
            example.Equip(bodySuit);
            Assert.AreSame(example.Equipment.Head, bodySuit);
            Assert.AreSame(example.Equipment.Body, bodySuit);
            Assert.AreSame(example.Equipment.RightLeg, bodySuit);
            Assert.AreSame(example.Equipment.LeftLeg, bodySuit);
            Assert.AreSame(example.Equipment.RightArm, bodySuit);
            Assert.AreSame(example.Equipment.LeftArm, bodySuit);

            var enemy = new Character();

            // hit body
            SetRandomRollerResults(new int[] { 5, 5, 0, 0 });
            enemy.Attack(example);
            Assert.AreEqual(HitLocation.Body, example.DamageHistory.Last().HitLocation);
            Assert.AreEqual(0, example.DamageHistory.Last().Damage);

            // left arm
            SetRandomRollerResults(new int[] { 2, 2, 0, 0 });
            enemy.Attack(example);
            Assert.AreEqual(HitLocation.LeftArm, example.DamageHistory.Last().HitLocation);
            Assert.AreEqual(0, example.DamageHistory.Last().Damage);

            // right arm
            SetRandomRollerResults(new int[] { 3, 3, 0, 0 });
            enemy.Attack(example);
            Assert.AreEqual(HitLocation.RightArm, example.DamageHistory.Last().HitLocation);
            Assert.AreEqual(0, example.DamageHistory.Last().Damage);

            // left leg
            SetRandomRollerResults(new int[] { 8, 8, 0, 0 });
            enemy.Attack(example);
            Assert.AreEqual(HitLocation.LeftLeg, example.DamageHistory.Last().HitLocation);
            Assert.AreEqual(0, example.DamageHistory.Last().Damage);

            // right leg
            SetRandomRollerResults(new int[] { 9, 9, 0, 0 });
            enemy.Attack(example);
            Assert.AreEqual(HitLocation.RightLeg, example.DamageHistory.Last().HitLocation);
            Assert.AreEqual(0, example.DamageHistory.Last().Damage);
        }

        [Test]
        public void ItCanEquipASwordAndDealAdditionalDamage()
        {
            var example = new Character();
            var sword = GrungnisFavorManager.CraftWeapon().ThatDeals(4);
            example.Equip(sword);
            Assert.AreSame(example.Equipment.RightHand, sword);

            var enemy = new Character();

            SetRandomRollerResults(new int[] { 2, 0, 3, 0 });
            example.Attack(enemy);
            Assert.AreEqual(5, enemy.DamageHistory.Last().Damage);
        }
    }
}
*/
