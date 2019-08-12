import { Academics } from './career';
import { Skill, ISkill } from "./skill";

export abstract class SkillLibrary {
  static AnimalCare: Skill = new Skill({ Description: "Animal Care", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true } as ISkill);
  static AnimalTraining: Skill = new Skill({ Description: "Animal Training", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static AnimalTraining_Demigryph: Skill = new Skill({ Description: "Animal Training (Demigryph)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static AnimalTraining_Dog: Skill = new Skill({ Description: "Animal Training (Dog)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static AnimalTraining_Horse: Skill = new Skill({ Description: "Animal Training (Horse)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static AnimalTraining_Pegasus: Skill = new Skill({ Description: "Animal Training (Pegasus)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static AnimalTraining_Pigeon: Skill = new Skill({ Description: "Animal Training (Pigeon)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Art: Skill = new Skill({ Description: "Art", CharacteristicType: CharacteristicType.Dexterity, IsGrouped: true } as ISkill);
  static Art_Cartography: Skill = new Skill({ Description: "Art (Cartography)", CharacteristicType: CharacteristicType.Dexterity, IsGrouped: true } as ISkill);
  static Art_Engraving: Skill = new Skill({ Description: "Art (Engraving)", CharacteristicType: CharacteristicType.Dexterity, IsGrouped: true } as ISkill);
  static Art_Mosaics: Skill = new Skill({ Description: "Art (Mosaics)", CharacteristicType: CharacteristicType.Dexterity, IsGrouped: true } as ISkill);
  static Art_Painting: Skill = new Skill({ Description: "Art (Painting)", CharacteristicType: CharacteristicType.Dexterity, IsGrouped: true } as ISkill);
  static Art_Sculpture: Skill = new Skill({ Description: "Art (Sculpture)", CharacteristicType: CharacteristicType.Dexterity, IsGrouped: true } as ISkill);
  static Art_Tattoo: Skill = new Skill({ Description: "Art (Tattoo)", CharacteristicType: CharacteristicType.Dexterity, IsGrouped: true } as ISkill);
  static Art_Weaving: Skill = new Skill({ Description: "Art (Weaving)", CharacteristicType: CharacteristicType.Dexterity, IsGrouped: true } as ISkill);
  static Athletics: Skill = new Skill({ Description: "Athletics", CharacteristicType: CharacteristicType.Agility } as ISkill);
  static Bribery: Skill = new Skill({ Description: "Bribery", CharacteristicType: CharacteristicType.Fellowship } as ISkill);
  static Channelling: Skill = new Skill({ Description: "Channelling", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Aqshy: Skill = new Skill({ Description: "Channelling (Aqshy)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Azyr: Skill = new Skill({ Description: "Channelling (Azyr)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Chamon: Skill = new Skill({ Description: "Channelling (Chamon)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Dhar: Skill = new Skill({ Description: "Channelling (Dhar)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Ghur: Skill = new Skill({ Description: "Channelling (Ghur)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Ghyran: Skill = new Skill({ Description: "Channelling (Ghyran)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Hysh: Skill = new Skill({ Description: "Channelling (Hysh)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Shyish: Skill = new Skill({ Description: "Channelling (Shyish)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Channelling_Ulgu: Skill = new Skill({ Description: "Channelling (Ulgu)", CharacteristicType: CharacteristicType.Willpower, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Charm: Skill = new Skill({ Description: "Charm", CharacteristicType: CharacteristicType.Fellowship } as ISkill);
  static CharmAnimal: Skill = new Skill({ Description: "Charm Animal", CharacteristicType: CharacteristicType.Willpower } as ISkill);
  static Climb: Skill = new Skill({ Description: "Climb", CharacteristicType: CharacteristicType.Strength } as ISkill);
  static ConsumeAlcohol: Skill = new Skill({ Description: "Consume Alcohol", CharacteristicType: CharacteristicType.Toughness } as ISkill);
  static Cool: Skill = new Skill({ Description: "Cool", CharacteristicType: CharacteristicType.Willpower } as ISkill);
  static Dodge: Skill = new Skill({ Description: "Dodge", CharacteristicType: CharacteristicType.Agility } as ISkill);
  static Drive: Skill = new Skill({ Description: "Drive", CharacteristicType: CharacteristicType.Agility } as ISkill);
  static Endurance: Skill = new Skill({ Description: "Endurance", CharacteristicType: CharacteristicType.Toughness } as ISkill);
  static Entertain: Skill = new Skill({ Description: "Entertain", CharacteristicType: CharacteristicType.Fellowship, IsGrouped: true } as ISkill);
  static Entertain_Acting: Skill = new Skill({ Description: "Entertain (Acting)", CharacteristicType: CharacteristicType.Fellowship, IsGrouped: true } as ISkill);
  static Entertain_Comedy: Skill = new Skill({ Description: "Entertain (Comedy)", CharacteristicType: CharacteristicType.Fellowship, IsGrouped: true } as ISkill);
  static Entertain_Singing: Skill = new Skill({ Description: "Entertain (Singing)", CharacteristicType: CharacteristicType.Fellowship, IsGrouped: true } as ISkill);
  static Entertain_Storytelling: Skill = new Skill({ Description: "Entertain (Storytelling)", CharacteristicType: CharacteristicType.Fellowship, IsGrouped: true } as ISkill);
  static Evaluate: Skill = new Skill({ Description: "Evaluate", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true } as ISkill);
  static Gamble: Skill = new Skill({ Description: "Gamble", CharacteristicType: CharacteristicType.Intelligence } as ISkill);
  static Gossip: Skill = new Skill({ Description: "Gossip", CharacteristicType: CharacteristicType.Fellowship } as ISkill);
  static Haggle: Skill = new Skill({ Description: "Haggle", CharacteristicType: CharacteristicType.Fellowship } as ISkill);
  static Heal: Skill = new Skill({ Description: "Heal", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true } as ISkill);
  static Intimidate: Skill = new Skill({ Description: "Intimidate", CharacteristicType: CharacteristicType.Strength } as ISkill);
  static Intuition: Skill = new Skill({ Description: "Intuition", CharacteristicType: CharacteristicType.Initiative } as ISkill);
  static Language: Skill = new Skill({ Description: "Language", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Albion: Skill = new Skill({ Description: "Language (Albion)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_BattleTongue: Skill = new Skill({ Description: "Language (Battle Tongue)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Bretonnian: Skill = new Skill({ Description: "Language (Bretonnian)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Classical: Skill = new Skill({ Description: "Language (Classical)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Eltharin: Skill = new Skill({ Description: "Language (Elthárin)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Estalian: Skill = new Skill({ Description: "Language (Estalian)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Gospodarinyi: Skill = new Skill({ Description: "Language (Gospodarinyi)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Grumbarth: Skill = new Skill({ Description: "Language (Grumbarth)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Khazalid: Skill = new Skill({ Description: "Language (Khazalid)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Magick: Skill = new Skill({ Description: "Language (Magick)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Mootish: Skill = new Skill({ Description: "Language (Mootish)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Norse: Skill = new Skill({ Description: "Language (Norse)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Reikspiel: Skill = new Skill({ Description: "Language (Reikspiel)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Queekish: Skill = new Skill({ Description: "Language (Queekish)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Tilean: Skill = new Skill({ Description: "Language (Tilean)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_ThievesTongue: Skill = new Skill({ Description: "Language (ThievesTongue)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Language_Wastelander: Skill = new Skill({ Description: "Language (Wastelander)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Leadership: Skill = new Skill({ Description: "Leadership", CharacteristicType: CharacteristicType.Fellowship } as ISkill);
  static Lore: Skill = new Skill({ Description: "Lore", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Engineering: Skill = new Skill({ Description: "Lore (Engineering)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Geology: Skill = new Skill({ Description: "Lore (Geology)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Heraldry: Skill = new Skill({ Description: "Lore (Heraldry)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_History: Skill = new Skill({ Description: "Lore (History)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Law: Skill = new Skill({ Description: "Lore (Law)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Magick: Skill = new Skill({ Description: "Lore (Magick)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Metallurgy: Skill = new Skill({ Description: "Lore (Metallurgy)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Reikland: Skill = new Skill({ Description: "Lore (Reikland)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Science: Skill = new Skill({ Description: "Lore (Science)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Lore_Theology: Skill = new Skill({ Description: "Lore (Theology)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Melee: Skill = new Skill({ Description: "Melee", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Melee_Basic: Skill = new Skill({ Description: "Melee (Basic)", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Melee_Brawling: Skill = new Skill({ Description: "Melee (Brawling)", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Melee_Cavalry: Skill = new Skill({ Description: "Melee (Cavalry)", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Melee_Fencing: Skill = new Skill({ Description: "Melee (Fencing)", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Melee_Flail: Skill = new Skill({ Description: "Melee (Flail)", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Melee_Parry: Skill = new Skill({ Description: "Melee (Parry)", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Melee_PoleArm: Skill = new Skill({ Description: "Melee (Pole-Arm)", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Melee_TwoHanded: Skill = new Skill({ Description: "Melee (Two-Handed)", CharacteristicType: CharacteristicType.WeaponSkill, IsGrouped: true } as ISkill);
  static Navigation: Skill = new Skill({ Description: "Navigation", CharacteristicType: CharacteristicType.Initiative } as ISkill);
  static OutdoorSurvival: Skill = new Skill({ Description: "Outdoor Survival", CharacteristicType: CharacteristicType.Intelligence } as ISkill);
  static Perception: Skill = new Skill({ Description: "Perception", CharacteristicType: CharacteristicType.Initiative } as ISkill);
  static Perform: Skill = new Skill({ Description: "Perform", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Perform_Acrobatics: Skill = new Skill({ Description: "Perform (Acrobatics)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Perform_Clowning: Skill = new Skill({ Description: "Perform (Clowning)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Perform_Dancing: Skill = new Skill({ Description: "Perform (Dancing)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Perform_Firebreathing: Skill = new Skill({ Description: "Perform (Firebreathing)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Perform_Juggling: Skill = new Skill({ Description: "Perform (Juggling)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Perform_Miming: Skill = new Skill({ Description: "Perform (Miming)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Perform_RopeWalking: Skill = new Skill({ Description: "Perform (Rope Walking)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static PickLock: Skill = new Skill({ Description: "Pick Lock", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true } as ISkill);
  static Play: Skill = new Skill({ Description: "Play", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Play_Bagpipe: Skill = new Skill({ Description: "Play (Bagpipe)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Play_Lute: Skill = new Skill({ Description: "Play (Lute)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Play_Harpsichord: Skill = new Skill({ Description: "Play (Harpsichord)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Play_Horn: Skill = new Skill({ Description: "Play (Horn)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Play_Violin: Skill = new Skill({ Description: "Play (Violin)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Pray: Skill = new Skill({ Description: "Pray", CharacteristicType: CharacteristicType.Fellowship, IsAdvanced: true } as ISkill);
  static Ranged: Skill = new Skill({ Description: "Ranged", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Ranged_Blackpowder: Skill = new Skill({ Description: "Ranged (Blackpowder)", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Ranged_Bow: Skill = new Skill({ Description: "Ranged (Bow)", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Ranged_Crossbow: Skill = new Skill({ Description: "Ranged (Crossbow)", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Ranged_Engineering: Skill = new Skill({ Description: "Ranged (Engineering)", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Ranged_Entangling: Skill = new Skill({ Description: "Ranged (Entangling)", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Ranged_Explosives: Skill = new Skill({ Description: "Ranged (Explosives)", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Ranged_Sling: Skill = new Skill({ Description: "Ranged (Sling)", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Ranged_Throwing: Skill = new Skill({ Description: "Ranged (Throwing)", CharacteristicType: CharacteristicType.BallisticSkill, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Research: Skill = new Skill({ Description: "Research", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true } as ISkill);
  static Ride: Skill = new Skill({ Description: "Ride", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Ride_Demigryph: Skill = new Skill({ Description: "Ride (Demigryph)", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Ride_GreatWolf: Skill = new Skill({ Description: "Ride (Great Wolf)", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Ride_Griffon: Skill = new Skill({ Description: "Ride (Griffon)", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Ride_Horse: Skill = new Skill({ Description: "Ride (Horse)", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Ride_Pegasus: Skill = new Skill({ Description: "Ride (Pegasus)", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Row: Skill = new Skill({ Description: "Row", CharacteristicType: CharacteristicType.Strength } as ISkill);
  static Sail: Skill = new Skill({ Description: "Sail", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Sail_Barge: Skill = new Skill({ Description: "Sail (Barge)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Sail_Caravel: Skill = new Skill({ Description: "Sail (Caravel)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Sail_Cog: Skill = new Skill({ Description: "Sail (Cog)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Sail_Frigate: Skill = new Skill({ Description: "Sail (Frigate)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Sail_Wolfship: Skill = new Skill({ Description: "Sail (Wolfship)", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true, IsGrouped: true } as ISkill);
  static SecretSigns: Skill = new Skill({ Description: "Secret Signs", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static SecretSigns_GreyOrder: Skill = new Skill({ Description: "Secret Signs (Grey Order)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static SecretSigns_Guild: Skill = new Skill({ Description: "Secret Signs (Guild)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static SecretSigns_Ranger: Skill = new Skill({ Description: "Secret Signs (Ranger)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static SecretSigns_Scout: Skill = new Skill({ Description: "Secret Signs (Scout)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static SecretSigns_Thief: Skill = new Skill({ Description: "Secret Signs (Thief)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static SecretSigns_Vagabond: Skill = new Skill({ Description: "Secret Signs (Vagabond)", CharacteristicType: CharacteristicType.Intelligence, IsAdvanced: true, IsGrouped: true } as ISkill);
  static SetTrap: Skill = new Skill({ Description: "Set Trap", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true } as ISkill);
  static SleightOfHand: Skill = new Skill({ Description: "Sleight of Hand", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true } as ISkill);
  static Stealth: Skill = new Skill({ Description: "Stealth", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Stealth_Rural: Skill = new Skill({ Description: "Stealth (Rural)", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Stealth_Underground: Skill = new Skill({ Description: "Stealth (Underground)", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Stealth_Urban: Skill = new Skill({ Description: "Stealth (Urban)", CharacteristicType: CharacteristicType.Agility, IsGrouped: true } as ISkill);
  static Swim: Skill = new Skill({ Description: "Swim", CharacteristicType: CharacteristicType.Agility, IsAdvanced: true } as ISkill);
  static Track: Skill = new Skill({ Description: "Track", CharacteristicType: CharacteristicType.Initiative, IsAdvanced: true } as ISkill);
  static Trade: Skill = new Skill({ Description: "Trade", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Trade_Apothecary: Skill = new Skill({ Description: "Trade (Apothecary)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Trade_Calligrapher: Skill = new Skill({ Description: "Trade (Calligrapher)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Trade_Chandler: Skill = new Skill({ Description: "Trade (Chandler)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Trade_Carpenter: Skill = new Skill({ Description: "Trade (Carpenter)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Trade_Cook: Skill = new Skill({ Description: "Trade (Cook)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Trade_Embalmer: Skill = new Skill({ Description: "Trade (Embalmer)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Trade_Smith: Skill = new Skill({ Description: "Trade (Smith)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);
  static Trade_Tanner: Skill = new Skill({ Description: "Trade (Tanner)", CharacteristicType: CharacteristicType.Dexterity, IsAdvanced: true, IsGrouped: true } as ISkill);

  static BasicSkills: Skill[] = [
    SkillLibrary.Art,
    SkillLibrary.Athletics,
    SkillLibrary.Bribery,
    SkillLibrary.Charm,
    SkillLibrary.CharmAnimal,
    SkillLibrary.Climb,
    SkillLibrary.ConsumeAlcohol,
    SkillLibrary.Cool,
    SkillLibrary.Dodge,
    SkillLibrary.Drive,
    SkillLibrary.Endurance,
    SkillLibrary.Entertain,
    SkillLibrary.Gamble,
    SkillLibrary.Gossip,
    SkillLibrary.Haggle,
    SkillLibrary.Intimidate,
    SkillLibrary.Intuition,
    SkillLibrary.Leadership,
    SkillLibrary.Melee,
    SkillLibrary.Melee_Basic,
    SkillLibrary.Navigation,
    SkillLibrary.OutdoorSurvival,
    SkillLibrary.Perception,
    SkillLibrary.Ride,
    SkillLibrary.Row,
    SkillLibrary.Stealth
  ];
}
