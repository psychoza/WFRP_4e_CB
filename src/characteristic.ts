export class Characteristic {
  Description: string = '';
  CharacteristicType: CharacteristicType;
  StartingScore: number = 0;
  SpeciesScore: number = 0;
  Advances: number = 0;
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

  GetInitialScore(): number {
    return this.StartingScore + this.SpeciesScore;
  };

  GetTotalScore(): number {
    return this.StartingScore + this.SpeciesScore + this.Advances;
  };
  GetScoreBonus(): number {
    return Math.floor(this.GetTotalScore() / 10);
  };
  SwapStartingScores(swappingCharacteristic: Characteristic): void {
    let tempScore = this.StartingScore;
    this.StartingScore = swappingCharacteristic.StartingScore;
    swappingCharacteristic.StartingScore = tempScore;
  }
  HasOriginalScore(): boolean {
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
