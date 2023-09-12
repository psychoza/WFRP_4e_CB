export class Challenge {
  actionType: ActionType;
  modifierGroup: ModifierGroup;
  description: string;
  modifier: number;

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
  RangedAiming,
  RangedMoving
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
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedAiming, 'Shooting when you spent your last Action aiming.', 20),
    new Challenge(ActionType.RangedAttack, ModifierGroup.RangedMoving, 'Shooting on a Round where you also use your Move.', -10),

  ];

}
