import { Character } from "./character";
import { Dicer } from "./dicer";

export class CharacterBuilder {
  character: Character = null;

  constructor() {
    this.CreateCharacter();
  }

  public CreateCharacter() {
    let newCharacter = new Character();
    newCharacter.rollANewCharacter();
    this.character = newCharacter;
  }

  public getCeilingValue(value) {
    return Math.ceil(value);  
  }

  get numberOfSkillsPerColumn():number{
    if(this.character)
    {
      return Math.ceil(this.character.Skills.length / 3)
    }
    else 
      return 0;

  }
}
