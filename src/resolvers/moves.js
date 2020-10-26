const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Move: {
    type: urlResolver('getTypeById'),
    target: urlResolver('getMoveTargetById'),
    generation: urlResolver('getGenerationById'),
    damageClass: urlResolver('getMoveDamageClassById'),
    contestType: urlResolver('getContestTypeById'),
    contestEffect: urlResolver('getContestEffectById'),
    superContestEffect: urlResolver('getSuperContestEffectById')
  },
  PastMoveStatValues: {
    type: urlResolver('getTypeById'),
    versionGroup: urlResolver('getVersionGroupById')
  },
  MoveStatChange: {
    stat: urlResolver('getStatById')
  },
  MoveMetaData: {
    ailment: urlResolver('getMoveAilmentById'),
    category: urlResolver('getMoveCategoryById')
  },
  MoveAilment: {
    moves: urlListResolver('getMoveById')
  },
  MoveCategory: {
    moves: urlListResolver('getMoveById')
  },
  MoveLearnMethod: {
    versionGroups: urlListResolver('getVersionGroupById')
  },
  MoveDamageClass: {
    moves: urlListResolver('getMoveById')
  }
}
