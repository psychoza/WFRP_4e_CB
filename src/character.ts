import { Characteristic } from './characteristic';
import { Dicer } from "./dicer";
import { Species, Dwarf, Halfling, HighElf, Human, WoodElf } from "./species";
import { Class, Career, Scholar } from './career';

export class Character {
  private dicer: Dicer = null;

  Name: string = "Bob";

  Species: Species = null;
  RandomSpecies: Species = null;
  SpeciesRoll: number = 0;

  CareerRoll: number = 0;
  Class: Class;
  Career: Career;

  CharacteristicSum: number = 0;
  CharacteristicPct: number = 0;
  WeaponSkill: Characteristic = new Characteristic('', 0, 0);
  BallisticSkill: Characteristic = new Characteristic('', 0, 0);
  Strength: Characteristic = new Characteristic('', 0, 0);
  Toughness: Characteristic = new Characteristic('', 0, 0);
  Initiative: Characteristic = new Characteristic('', 0, 0);
  Agility: Characteristic = new Characteristic('', 0, 0);
  Dexterity: Characteristic = new Characteristic('', 0, 0);
  Intelligence: Characteristic = new Characteristic('', 0, 0);
  Willpower: Characteristic = new Characteristic('', 0, 0);
  Fellowship: Characteristic = new Characteristic('', 0, 0);
  Fate: number = 0;
  Fortune: number = 0;
  Resilience: number = 0;
  Resolve: number = 0;
  ExtraPoints: number = 0;
  Movement: number = 0;
  Experience: number = 0;

  constructor() {
    this.dicer = new Dicer();
    this.Species = new Human();
    //this.rollANewCharacter();
  }

  rollANewCharacter(): void {
    this.rollSpecies();
    this.rollClassAndCareer();
    this.rollCharacteristics();
    this.setCharacteristicRollNumbers();
    this.Experience = this.getExperience();
  }

  rollSum(): number {
    return this.dicer.RollDice().Sum();
  }

  rollPercentile(): number {
    return this.dicer.RollDice().PercentileResult();
  }

  private rollSpecies(): void {
    let species: Species;
    this.SpeciesRoll = this.rollPercentile();
    if (this.SpeciesRoll >= 1 && this.SpeciesRoll <= 90)
      species = new Human();
    else if (this.SpeciesRoll >= 91 && this.SpeciesRoll <= 94)
      species = new Halfling();
    else if (this.SpeciesRoll >= 95 && this.SpeciesRoll <= 98)
      species = new Dwarf();
    else if (this.SpeciesRoll == 99)
      species = new HighElf();
    else if (this.SpeciesRoll == 100)
      species = new WoodElf();
    this.Species = species;
    this.RandomSpecies = this.Species;
    this.Fate = this.Species.Fate;
    this.Fortune = this.Fate;
    this.Resilience = this.Species.Resilience;
    this.Resolve = this.Resilience;
    this.ExtraPoints = this.Species.ExtraPoints;
    this.Movement = this.Species.Movement;
  }

  private rollClassAndCareer(): void {
    this.CareerRoll = this.rollPercentile();
    let rolledCareer = this.Species.AvailableCareers.find((ac) => { return ac.MinimumRange <= this.CareerRoll && this.CareerRoll <= ac.MaximumRange });
    if (rolledCareer) {
      this.Career = rolledCareer.Career;
      this.Class = rolledCareer.Career.Class;
    }
  }

  private rollCharacteristics(): void {
    this.WeaponSkill = new Characteristic('Weapon Skill', this.rollSum(), this.Species.WeaponSkill);
    this.BallisticSkill = new Characteristic('Ballistic Skill', this.rollSum(), this.Species.BallisticSkill);
    this.Strength = new Characteristic('Strength', this.rollSum(), this.Species.Strength);
    this.Toughness = new Characteristic('Toughness', this.rollSum(), this.Species.Toughness);
    this.Initiative = new Characteristic('Initiative', this.rollSum(), this.Species.Initiative);
    this.Agility = new Characteristic('Agility', this.rollSum(), this.Species.Agility);
    this.Dexterity = new Characteristic('Dexterity', this.rollSum(), this.Species.Dexterity);
    this.Intelligence = new Characteristic('Intelligence', this.rollSum(), this.Species.Intelligence);
    this.Willpower = new Characteristic('Willpower', this.rollSum(), this.Species.Willpower);
    this.Fellowship = new Characteristic('Fellowship', this.rollSum(), this.Species.Fellowship);
  }

  setCharacteristicRollNumbers(): void {
    this.CharacteristicSum = this.WeaponSkill.StartingScore +
      this.BallisticSkill.StartingScore +
      this.Strength.StartingScore +
      this.Toughness.StartingScore +
      this.Initiative.StartingScore +
      this.Agility.StartingScore +
      this.Dexterity.StartingScore +
      this.Intelligence.StartingScore +
      this.Willpower.StartingScore +
      this.Fellowship.StartingScore;
    this.CharacteristicPct = Math.floor((this.CharacteristicSum / 200) * 100);
  }

  selectSpecies(species: Species) {
    this.Species = species;
    this.Experience = this.getExperience();
  }

  swapCharacteristics(c1: Characteristic, c2: Characteristic) {
    c1.SwapStartingScores(c2);
    this.Experience = this.getExperience();
  }

  getExperience(): number {
    let xp: number = 0;

    if (this.isUsingTheirRandomSpecies())
      xp += 20;
    if (this.isUsingTheirRandomCharacteristics())
      xp += 50;
    return xp;
  }

  private isUsingTheirRandomSpecies(): boolean {
    return this.RandomSpecies.Description === this.Species.Description;
  }

  private isUsingTheirRandomCharacteristics(): boolean {
    if (this.WeaponSkill.HasOriginalScore() &&
      this.BallisticSkill.HasOriginalScore() &&
      this.Strength.HasOriginalScore() &&
      this.Toughness.HasOriginalScore() &&
      this.Initiative.HasOriginalScore() &&
      this.Agility.HasOriginalScore() &&
      this.Dexterity.HasOriginalScore() &&
      this.Intelligence.HasOriginalScore() &&
      this.Willpower.HasOriginalScore() &&
      this.Fellowship.HasOriginalScore()
    )
      return true;
    else
      return false;
  }
}
