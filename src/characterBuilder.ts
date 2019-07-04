import { Character } from "./character";
import { Dicer } from "./dicer";

export class CharacterBuilder {
  character: Character = null;

  constructor() {
    this.CreateCharacter();    
  }

  public CreateCharacter()
  {
      let newCharacter = new Character();
      newCharacter.rollANewCharacter();
      this.character = newCharacter;
  }
}
