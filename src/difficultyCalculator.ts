import {autoinject, computedFrom} from "aurelia-framework";
import {Challenge, Challenges} from "./objects/challenges";

@autoinject()
export class DifficultyCalculator {  
  challenges: Challenge[] = Challenges.challenges;
  selectedChallenges: Challenge[] = [];
  refreshComputed = false;

  @computedFrom('selectedChallenges', 'selectedChallenges.length', 'refreshComputed')
  get challengeScore(): number {
    let runningScore = 0;
    this.selectedChallenges.forEach((c) => {
      runningScore += c.modifier;
    });
    return runningScore > 60 ? 60 : runningScore < -30 ? -30 : runningScore;
  };
  
  constructor() { }
  
  selectChallenge(challenge: Challenge): void {
    this.selectedChallenges = this.selectedChallenges.filter((c) => c.modifierGroup !== challenge.modifierGroup);
    this.selectedChallenges.push(challenge);
    this.refreshComputed = !this.refreshComputed;
  }
}
