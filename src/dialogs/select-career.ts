import { Career, Scholar, Merchant } from './../objects/career';
import { DialogController } from 'aurelia-dialog';
import {autoinject, computedFrom} from 'aurelia-framework';
import { Character } from '../objects/character';
import { CharacteristicType } from '../objects/characteristicType';

@autoinject()
export class SelectCareer {
  character:Character;
  availableCareers: Career[] = [];
  selectedCareer: Career = null;

  @computedFrom('character', 'character.Career', 'character.Career.Description', 'selectedCareer', 'selectedCareer.Description')
  get doesGrantBonus(): boolean {
    return this.character.RandomCareer.Description === this.selectedCareer.Description;
  }
  
  get WeaponSkill():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.WeaponSkill; });
  }
  get BallisticSkill():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.BallisticSkill; });
  }
  
  get Strength():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.Strength; });
  }
  
  get Toughness():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.Toughness; });
  }
  
  get Initiative():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.Initiative; });
  }
  
  get Agility():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.Agility; });
  }
  
  get Dexterity():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.Dexterity; });
  }
  
  get Intelligence():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.Intelligence; });
  }
  
  get Willpower():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.Willpower; });
  }
  
  get Fellowship():boolean{
    return this.selectedCareer.Characteristics.some( (c) => { return c === CharacteristicType.Fellowship; });
  }

  constructor(public dialogController: DialogController) {    
  }

  activate(character: Character) {
    this.character = character;
    this.availableCareers = [...this.character.Species.AvailableCareers.map(c => c.Career)];
    this.character.rollClassAndCareer();
    this.resync();
  }

  confirmCareer():void{
    this.character.selectCareer(this.selectedCareer);
    this.dialogController.ok();
  }

  findCareer(career: Career): Career {
    return this.availableCareers.find((c)=> {return c.Description === career.Description; });
  }
  
  resync():void {
    this.selectedCareer = this.findCareer(this.character.RandomCareer);
  }
}
