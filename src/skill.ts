interface ISkill{
  Description: string;
  CharacteristicType: CharacteristicType;
  IsAdvanced: boolean;
  IsGrouped: boolean;
  Advances: number;
}

export class Skill {
  Description: string;
  CharacteristicType: CharacteristicType;
  IsAdvanced: boolean;
  IsGrouped: boolean;
  Advances: number;

  constructor();
  constructor(obj: ISkill);
  constructor(obj: ISkill = {} as ISkill) {
    this.Description = obj && obj.Description || "";
    this.CharacteristicType = obj && obj.CharacteristicType || null;
    this.IsAdvanced = obj && obj.IsAdvanced || false;
    this.IsGrouped = obj && obj.IsGrouped || false;
    this.Advances =obj && obj.Advances || 0;
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
      return 10;
    else if (nextAdvance <= 10)
      return 15;
    else if (nextAdvance <= 15)
      return 20;
    else if (nextAdvance <= 20)
      return 30;
    else if (nextAdvance <= 25)
      return 40;
    else if (nextAdvance <= 30)
      return 60;
    else if (nextAdvance <= 35)
      return 80;
    else if (nextAdvance <= 40)
      return 110;
    else if (nextAdvance <= 45)
      return 140;
    else if (nextAdvance <= 50)
      return 180;
    else if (nextAdvance <= 55)
      return 220;
    else if (nextAdvance <= 60)
      return 270;
    else if (nextAdvance <= 65)
      return 320;
    else if (nextAdvance <= 70)
      return 380;
    else
      return 440;
  }
}
