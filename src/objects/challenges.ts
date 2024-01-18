export class Challenge {
  actionType: ActionType;
  modifierGroup: ModifierGroup;
  description: string;
  modifier: number;
  isSelected: boolean = false;
  style: string = '';

  constructor(type: ActionType, group: ModifierGroup, desc: string, mod: number) {
    this.actionType = type;
    this.modifierGroup = group;
    this.description = desc;
    this.modifier = mod;
  }
}

export enum ActionType {
  MeleeAttack,
  RangedAttack,
  Dodge,
}

export enum ModifierGroup {
  RangedTargetSize,
  RangedTargetGroup,
  RangedTargetDistance,
  RangedTargetConcealed,
  RangedTargetCover,
  RangedAiming,
  RangedMoving,
  MeleeOutnumber,
  MeleeFlanking,
  MeleeVsProne,
  MeleeWhileProne,
  MeleeOffhand,
  MeleeSurroundings,
  MeleePolearm,
  MeleeDarkness,  
}

export class Challenges {
  public static challenges: Challenge[] = [
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetSize, 'Shooting a Monstrous target (Giant size).', 60),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetSize, 'Shooting an Enormous target (Griffon size).', 40),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetSize, 'Shooting a Large target (Ogre size).', 20),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetSize, 'Shooting an Average target (Human size).', 0),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetSize, 'Shooting a Small target (Child size).', -10),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetSize, 'Shooting a Little target (Cat size).', -20),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetSize, 'Shooting a Tiny target (Mouse size).', -30),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetGroup, 'Shooting at a Crowd (13+ targets).', 60),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetGroup, 'Shooting at a Large Group (7-12 targets).', 40),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetGroup, 'Shooting at a Small Group (3-6 targets).', 20),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetDistance, 'Shooting a target at Point Blank Range (Range ÷ 10).', 40),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetDistance, 'Shooting a target at Short Range (Range ÷ 2).', 20),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetDistance, 'Shooting a target at Long Range (Range * 2).', -10),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetDistance, 'Shooting a target at Extreme Range (Range * 3).', -30),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetConcealed, 'Shooting targets concealed by fog, mist, or shadow.', -20),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetConcealed, 'Shooting in darkness.', -30),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetCover, 'Target in soft cover (behind a hedge).', -10),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetCover, 'Target in medium cover (behind a wooden fence).', -20),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedTargetCover, 'Target in hard cover (behind a stone wall).', -30),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedAiming, 'Shooting when you spent your last Action aiming.', 20),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedMoving, 'Shooting on a Round where you also use your Move.', -10),
    
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeSurroundings, 'Attacking whilst in the mud, heavy rain, or difficult terrain.', -10),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeSurroundings, 'Attacking in a monsoon, hurricane, or other extreme weather.', -20),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeSurroundings, 'Attacking or dodging in the deep snow, water, or other arduous terrain.', -30),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeOutnumber, 'Attacking an opponent you outnumber 3 to 1.', 40),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeOutnumber, 'Attacking an opponent you outnumber 2 to 1.', 20),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeFlanking, 'Attacking an Engaged opponent in the sides or rear.', 20),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeVsProne, 'Attacking a target with the Prone condition.', 20),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeWhileProne, 'Attacking whilst you have the Prone condition, or otherwise beneath your target.', -10),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeOffhand, 'Using a weapon in your offhand.', -20),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleePolearm, 'Fighting in an enclosed space with a weapon with a Length longer than Medium.', -20),
    new Challenge(ActionType.MeleeAttack, ModifierGroup.MeleeDarkness, 'Close combat in darkness.', -20),
  ];
}
