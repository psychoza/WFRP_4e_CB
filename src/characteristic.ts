export class Characteristic {
  Description: string = '';
  StartingScore: number = 0;
  SpeciesScore: number = 0;
  private OriginalScore: number = 0;

  constructor(description: string, startingScore: number, speciesScore: number) {
    this.Description = description;
    this.StartingScore = startingScore;
    this.OriginalScore = startingScore;
    this.SpeciesScore = speciesScore;
  }

  GetTotalScore(): number {
    return this.StartingScore + this.SpeciesScore;
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
}
