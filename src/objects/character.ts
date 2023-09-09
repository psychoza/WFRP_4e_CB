import { autoinject, computedFrom, observable } from 'aurelia-framework';
import { Characteristic } from './characteristic';
import { Dicer } from "./dicer";
import { Species, Dwarf, Halfling, HighElf, Human, WoodElf } from "./species";
import { Class, Career, Scholar } from './career';
import { Skill } from './skill';
import { SkillLibrary } from './skillLibrary';
import {CharacteristicType} from './characteristicType';
import { sortArrayByProperty, setArrayPropertyToNumber } from '../utilities/array-utilities';
import {CharacteristicDescriptions} from "./characteristicDescriptions";

//const constCharacteristics: string[] = ['WeaponSkill', 'BallisticSkill', 'Strength', 'Toughness', 'Initiative', 'Agility', 'Dexterity', 'Intelligence', 'Willpower', 'Fellowship'];

export class Character {
  private dicer: Dicer = null;
  UseRandomRolls: boolean = true;
  
  Name: string = "Bob";

  Species: Species = null;
  RandomSpecies: Species = null;
  @observable SpeciesRoll: number = 0;
  SpeciesRollChanged(newValue: number, oldValue: number): void {
    this.setSpecies();
  }

  @observable CareerRoll: number = 0;
  CareerRollChanged(newValue: number, oldValue: number): void {
    this.setCareer();
  }
  
  Class: Class;
  Career: Career;
  RandomCareer: Career;

  CharacteristicSum: number = 0;
  CharacteristicPct: number = 0;
  @observable Characteristics: Characteristic[] = [];
  CharacteristicsChanged(newValue, oldValue) {

  }

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
  SpentExperience: number = 0;
  get CurrentExperience(): number {
    return this.Experience - this.SpentExperience;
  };

  Skills: Skill[] = [];

  @computedFrom('Skills.length')
  get BasicSkills(): Skill[] {
    return this.Skills.filter((s) => { return SkillLibrary.BasicSkills.some((s2) => { return s2.Description == s.Description; }); });
  }

  @computedFrom('Skills.length')
  get AdvancedSkills(): Skill[] {
    return this.Skills.filter((s) => { return !SkillLibrary.BasicSkills.some((s2) => { return s2.Description == s.Description; }) && s.Advances !== 0; });
  }

  Wounds: number = 0;

  constructor() {
    this.dicer = new Dicer();
    this.Species = new Human();
  }

  rollANewCharacter(): void {
    this.rollSpecies();
    this.rollClassAndCareer();
    this.rollCharacteristics();
    this.setCharacteristicRollNumbers();
    // set species skills
    // set class skills
    this.Experience = this.getExperience();
    this.figureOutSkills();
    this.figureOutWounds();
  }

  finishRollingANewCharacter(): void {
    //this.rollSpecies();
    //this.rollClassAndCareer();
    //this.rollCharacteristics();
    this.setCharacteristicRollNumbers();
    this.Experience = this.getExperience();
    this.figureOutSkills();
    this.figureOutWounds();
  }

  rollSum(): number {
    return this.dicer.RollDice().Sum();
  }

  rollPercentile(): number {
    return this.dicer.RollDice().PercentileResult();
  }

  public rollSpecies(value: number = 0): void {    
    this.SpeciesRoll = this.UseRandomRolls || value === 0 ? this.rollPercentile() : value;  
  }
  
  private setSpecies(): void {
    if(this.SpeciesRoll < 1 || this.SpeciesRoll > 100) {
      this.SpeciesRoll = 1;
    }
      
    let species: Species;
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

  public rollClassAndCareer(value: number = 0): void {
    this.CareerRoll = this.UseRandomRolls || value === 0 ? this.rollPercentile() : value;    
  }
  
  private setCareer(): void {
    let rolledCareer = this.Species.AvailableCareers.find((ac) => { return ac.MinimumRange <= this.CareerRoll && this.CareerRoll <= ac.MaximumRange });
    if (rolledCareer) {
      this.Career = rolledCareer.Career;
      this.RandomCareer = this.Career;
      this.Class = rolledCareer.Career.Class;
    }
  }

  public rollCharacteristics(): void {
    this.Characteristics = [];
    CharacteristicDescriptions.Characteristics.forEach((characteristic) => {
      this.addCharacteristic(characteristic, this.rollSum());
    });
  }

  public addCharacteristic(type: string, score: number): void {
    let characteristicType = CharacteristicType[type];
    let speciesCharacteristicScore = this.Species[type];
    let canBeAdvanced = this.Career.Characteristics.some((c) => { return c === characteristicType; });
    let description = type.replace(/([A-Z])/g, ' $1').trim();
    this.Characteristics.push(new Characteristic(characteristicType, description, score, speciesCharacteristicScore, canBeAdvanced));
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

  selectCareer(career: Career) {
    this.Career = career;
    this.Class = career.Class;
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
    if (this.isUsingTheirRandomCareer())
      xp += 50
    return xp;
  }

  private isUsingTheirRandomSpecies(): boolean {
    return this.RandomSpecies.Description === this.Species.Description;
  }

  private isUsingTheirRandomCharacteristics(): boolean {
    let result = true
    this.Characteristics.forEach(c => {
      if (!c.HasOriginalScore)
        result = false;
    });
    return result;
  }

  private isUsingTheirRandomCareer(): boolean {
    return this.RandomCareer && this.Career ? this.RandomCareer.Description === this.Career.Description : false;
  }

  private figureOutSkills() {
    let skills = [...SkillLibrary.BasicSkills];

    if (this.Career && this.Career.Skills) {
      skills.push(...this.Career.Skills);
    }

    if (this.Species && this.Species.Skills) {
      skills.push(...this.Species.Skills);
    }

    setArrayPropertyToNumber(this.Skills, 'Advances');
    setArrayPropertyToNumber(skills, 'Advances');
    skills.forEach((skill) => {
      skill.Advances = Number.parseInt(skill.Advances.toString());
      let existingSkill = this.Skills.find((s) => { return s.Description === skill.Description; });
      if (!existingSkill) {
        this.Skills.push(skill);
      }
    });


    sortArrayByProperty(this.Skills, 'Description');
  }

  private figureOutWounds(): void {
    this.Wounds = this.Species.GetWounds(this.Strength.ScoreBonus, this.Toughness.ScoreBonus, this.Willpower.ScoreBonus);
  }

  getCharacteristicScore(type: CharacteristicType): number {
    return this.Characteristics.find((c) => { return c.CharacteristicType === type; }).TotalScore;
  }

  getSkillLevel(skill: Skill): number {
    let skillType = skill.CharacteristicType;
    let characteristicScore = this.getCharacteristicScore(skillType);
    return characteristicScore + skill.Advances;
  }

  advanceSkill(skill: Skill): void {

  }
}
