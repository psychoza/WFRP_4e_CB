export class Skill {
  Description: string = "";
  CharacteristicType: CharacteristicType = null;
  IsAdvanced: boolean = false;
  Advances: number = 0;
  constructor(desc: string, type: CharacteristicType, isAdvanced: boolean) {
    this.Description = desc;
    this.CharacteristicType = type;
    this.IsAdvanced = isAdvanced;
  }
}
