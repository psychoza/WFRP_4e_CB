import { CharacteristicType } from "./characteristicType";
import { observable, computedFrom } from "aurelia-framework";

export class Characteristic {
  Description: string = '';
  CharacteristicType: CharacteristicType;
  
  @observable StartingScore: number = 0;
  StartingScoreChanged(newValue, oldValue){
    
  }
  SpeciesScore: number = 0;
  @observable Advances: number = 0;
  AdvancesChanged(newValue, oldValue){
    
  }
  private OriginalScore: number = 0;
  CanBeAdvanced: boolean = false;

  constructor(type: CharacteristicType, description: string, startingScore: number, speciesScore: number, canBeAdvanced: boolean = false) {
    this.CharacteristicType = type;
    this.Description = description;
    this.StartingScore = startingScore;
    this.OriginalScore = startingScore;
    this.SpeciesScore = speciesScore;
    this.CanBeAdvanced = canBeAdvanced;
  }

  @computedFrom('StartingScore', 'SpeciesScore')
  get InitialScore(): number {
    return this.StartingScore + this.SpeciesScore;
  };

  @computedFrom('StartingScore','SpeciesScore','Advances')
  get TotalScore(): number {
    let num1 = Number.parseInt(this.StartingScore.toString()); 
    let num2 = Number.parseInt(this.SpeciesScore.toString()); 
    let num3 = Number.parseInt(this.Advances.toString());
    return num1 + num2 + num3;
  };

  @computedFrom('TotalScore')
  get ScoreBonus(): number {
    return Math.floor(this.TotalScore / 10);
  };

  SwapStartingScores(swappingCharacteristic: Characteristic): void {
    let tempScore = this.StartingScore;
    this.StartingScore = swappingCharacteristic.StartingScore;
    swappingCharacteristic.StartingScore = tempScore;
  }

  @computedFrom('OriginalScore', 'StartingScore')
  get HasOriginalScore(): boolean {
    return this.OriginalScore === this.StartingScore;
  }
  
  Advance(currentXp: number): number {
    let remainingXp = currentXp - this.GetAdvanceCost();
    if (remainingXp >= 0) {
      this.Advances += 1;
      return remainingXp;
    }
    else {
      return currentXp;
    }
  }
  GetAdvanceCost(): number {
    let nextAdvance = this.Advances + 1;
    if (nextAdvance <= 5)
      return 25;
    else if (nextAdvance <= 10)
      return 30;
    else if (nextAdvance <= 15)
      return 40;
    else if (nextAdvance <= 20)
      return 50;
    else if (nextAdvance <= 25)
      return 70;
    else if (nextAdvance <= 30)
      return 90;
    else if (nextAdvance <= 35)
      return 120;
    else if (nextAdvance <= 40)
      return 150;
    else if (nextAdvance <= 45)
      return 190;
    else if (nextAdvance <= 50)
      return 230;
    else if (nextAdvance <= 55)
      return 280;
    else if (nextAdvance <= 60)
      return 330;
    else if (nextAdvance <= 65)
      return 390;
    else if (nextAdvance <= 70)
      return 450;
    else
      return 520;
  }
}
