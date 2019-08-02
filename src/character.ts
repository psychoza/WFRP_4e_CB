import { Characteristic } from './characteristic';
import { Dicer } from "./dicer";
import { Species, Dwarf, Halfling, HighElf, Human, WoodElf } from "./species";
import { Class, Career, Scholar } from './career';
import { Skill } from './skill';
import { SkillLibrary } from './skillLibrary';

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
  Characteristics: Characteristic[] = [];

  get WeaponSkill(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.WeaponSkill });
  }
  get BallisticSkill(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.BallisticSkill });
  }
  get Strength(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Strength });
  }
  get Toughness(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Toughness });
  }
  get Initiative(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Initiative });
  }
  get Agility(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Agility });
  }
  get Dexterity(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Dexterity });
  }
  get Intelligence(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Intelligence });
  }
  get Willpower(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Willpower });
  }
  get Fellowship(): Characteristic {
    return this.Characteristics.find((c) => { return c.CharacteristicType == CharacteristicType.Fellowship });
  }

  Fate: number = 0;
  Fortune: number = 0;
  Resilience: number = 0;
  Resolve: number = 0;
  ExtraPoints: number = 0;
  Movement: number = 0;
  Experience: number = 0;

  Skills: Skill[] = [];

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
    this.figureOutSkills();
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
    this.Characteristics = [];
    this.Characteristics.push(new Characteristic(CharacteristicType.WeaponSkill, 'Weapon Skill', this.rollSum(), this.Species.WeaponSkill));
    this.Characteristics.push(new Characteristic(CharacteristicType.BallisticSkill, 'Ballistic Skill', this.rollSum(), this.Species.BallisticSkill));
    this.Characteristics.push(new Characteristic(CharacteristicType.Strength, 'Strength', this.rollSum(), this.Species.Strength));
    this.Characteristics.push(new Characteristic(CharacteristicType.Toughness, 'Toughness', this.rollSum(), this.Species.Toughness));
    this.Characteristics.push(new Characteristic(CharacteristicType.Initiative, 'Initiative', this.rollSum(), this.Species.Initiative));
    this.Characteristics.push(new Characteristic(CharacteristicType.Agility, 'Agility', this.rollSum(), this.Species.Agility));
    this.Characteristics.push(new Characteristic(CharacteristicType.Dexterity, 'Dexterity', this.rollSum(), this.Species.Dexterity));
    this.Characteristics.push(new Characteristic(CharacteristicType.Intelligence, 'Intelligence', this.rollSum(), this.Species.Intelligence));
    this.Characteristics.push(new Characteristic(CharacteristicType.Willpower, 'Willpower', this.rollSum(), this.Species.Willpower));
    this.Characteristics.push(new Characteristic(CharacteristicType.Fellowship, 'Fellowship', this.rollSum(), this.Species.Fellowship));
  }

  setCharacteristicRollNumbers(): void {
    let sum = 0;
    this.Characteristics.forEach(c => {
      sum += c.StartingScore
    });
    this.CharacteristicSum = sum;
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
    let result = true
    this.Characteristics.forEach(c => {
      if (!c.HasOriginalScore())
        result = false;
    });
    return result;
  }

  private figureOutSkills() {
    let skills = [...SkillLibrary.BasicSkills];
    if (this.Career && this.Career.Skills) {
      let careerSkills = this.Career.Skills;
      if (careerSkills) {
        careerSkills.forEach(skill => {
          if (!skills.some((s) => { return s.Description === skill.Description; }))
            skills.push(skill);
        });
      }
    }

    this.Skills = skills.sort((left: Skill, right: Skill) => {
      let l = left.Description.toLowerCase();
      let r = right.Description.toLowerCase();
      let comparisonResult: number = 0;
      if (l < r) {
        comparisonResult = -1;
      }
      else if (l > r) {
        comparisonResult = 1;
      };
      return comparisonResult;
    });
  }

  private getCharacteristicScore(type: CharacteristicType): number {
    return this.Characteristics.find((c) => { return c.CharacteristicType === type; }).GetTotalScore();
  }

  getSkillLevel(skill: Skill): number {
    let skillType = skill.CharacteristicType;
    let characteristicScore = this.getCharacteristicScore(skillType);
    return characteristicScore + skill.Advances;
  }

  advanceSkill(skill: Skill): void {

  }
}
