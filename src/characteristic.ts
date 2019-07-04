export class Characteristic {
  Description: string = '';
  StartingScore: number = 0;
  SpeciesScore: number = 0;
  
  constructor (description:string, startingScore:number, speciesScore:number){
    this.Description = description;
    this.StartingScore = startingScore;
    this.SpeciesScore = speciesScore;
  }
  
  GetTotalScore(): number {
    return this.StartingScore + this.SpeciesScore;
  };
  GetScoreBonus(): number {
    return Math.floor( this.GetTotalScore() / 10 );
  };
}
