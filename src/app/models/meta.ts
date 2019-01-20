
export enum BuffPriority {
  TalentRush = 1,
  SkillApplied = 2,
  SelfCondition = 3,
  Self = 4
}

export interface Meta {

  // the meta-source - THIS IS AUTOMATICALLY ASSIGNED
  source: string;

  // the meta-source character - THIS IS AUTOMATICALLY ASSIGNED
  sourceCharacter: string;

  // the meta-source image - THIS IS AUTOMATICALLY ASSIGNED
  sourceImage: string;

  // the priority of the meta
  priority: BuffPriority;

  // the "type" of buff of the meta (ATK, Damage, INT, etc)
  buff: string;

  // the value of the buff in % (ATK +15% -> 15)
  buffValue: number;
}
