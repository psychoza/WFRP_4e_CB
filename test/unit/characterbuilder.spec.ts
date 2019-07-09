import {CharacterBuilder} from '../../src/characterBuilder';

describe('Character Builder - ', () => {
  let builder: CharacterBuilder = null;
  beforeEach(() => {
    builder = new CharacterBuilder();
  })
  it('can create a character', () => {
    expect(builder.CreateCharacter).toBeDefined();    
  });
});
