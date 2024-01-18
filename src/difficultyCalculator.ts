import {autoinject, computedFrom, observable} from "aurelia-framework";
import {ActionType, Challenge, Challenges} from "./objects/challenges";

@autoinject()
export class DifficultyCalculator {
    selectedChallenge: Challenge;
    selectedChallenges: Challenge[] = [];
    refreshComputed = false;
    @observable actionType: number = null;

    actionTypeChanged(newValue, oldValue): void {
        this.selectedChallenges.forEach((x) => {
            x.isSelected = false;
        });
        this.selectedChallenges = this.selectedChallenges.filter((c) => c.actionType === this.actionType);
        this.refreshComputed = !this.refreshComputed;
    }

    challenges: Challenge[] = [];

    @computedFrom('selectedChallenges', 'selectedChallenges.length', 'refreshComputed')
    get challengeScore(): number {
        let runningScore = 0;
        this.selectedChallenges.forEach((c) => {
            runningScore += c.modifier;
        });
        return runningScore > 60 ? 60 : runningScore < -30 ? -30 : runningScore;
    };

    @computedFrom('selectedChallenges', 'selectedChallenges.length', 'refreshComputed')
    get challengeDescription(): string {
        if (this.challengeScore === 60) {
            return 'Very Easy';
        } else if (this.challengeScore >= 40) {
            return 'Easy';
        } else if (this.challengeScore >= 20) {
            return 'Average';
        } else if (this.challengeScore >= 0) {
            return 'Challenging';
        } else if (this.challengeScore >= -10) {
            return 'Difficult';
        } else if (this.challengeScore >= -20) {
            return 'Hard';
        }

        return 'Very Hard';
    };

    @computedFrom('selectedChallenges', 'selectedChallenges.length', 'refreshComputed')
    get challengeStyle(): string {
        if (this.challengeScore > 0) {
            return 'alert alert-success';
        } else if (this.challengeScore < 0) {
            return 'alert alert-danger';
        }

        return 'alert alert-primary';
    };

    @computedFrom('selectedChallenges', 'selectedChallenges.length', 'refreshComputed')
    get availableChallenges(): Challenge[] {
        const result = this.challenges.filter((c) => {
            return !this.selectedChallenges.some((sc) => {
                return sc.description === c.description || sc.modifierGroup === c.modifierGroup;
            }) && c.actionType == this.actionType;
        });

        let currentGroup;
        let index = 0;
        result.forEach((c) => {
            if (c.modifierGroup !== currentGroup) {
                currentGroup = c.modifierGroup;
                if (index !== 0) {
                    c.style = 'mt-3';
                }
                index++;
            }
        })

        return result;
    }

    constructor() {
    }

    attached(): void {
        this.loadChallenges();
    }

    loadChallenges(): void {
        this.challenges = Challenges.challenges;
        this.refreshComputed = !this.refreshComputed;
    }

    selectChallenge(challenge: Challenge): void {
        this.selectedChallenges = this.selectedChallenges.filter((c) => {
            return c.modifierGroup !== challenge.modifierGroup && c.actionType === challenge.actionType;
        });
        this.selectedChallenges.push(challenge);
        this.selectedChallenges.sort((a, b) => {
            if (a.modifier > b.modifier) {
                return -1;
            } else if (a.modifier < b.modifier) {
                return 1;
            }
            return 0;
        })
        this.deselectChallenges();
        this.refreshComputed = !this.refreshComputed;
    }

    removeChallenge(challenge: Challenge): void {
        this.selectedChallenges = this.selectedChallenges.filter((c) => {
            return c.description !== challenge.description;
        });
        this.deselectChallenges();
        this.refreshComputed = !this.refreshComputed;
    }

    deselectChallenges(): void {
        this.challenges.forEach((c) => {
            if (!this.selectedChallenges.some((sc) => {
                return sc.description === c.description && sc.modifier === c.modifier
            })) {
                c.isSelected = false;
            }
        })
    }

    challengeOnChanged(challenge: Challenge): void {
        if (challenge.isSelected) {
            this.selectChallenge(challenge);
        } else {
            this.removeChallenge(challenge);
        }
    }
}
