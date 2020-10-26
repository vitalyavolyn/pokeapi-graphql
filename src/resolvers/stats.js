const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Stat: {
    characteristics: urlListResolver('getCharacteristicById'),
    moveDamageClass: urlResolver('getMoveDamageClassById')
  },
  Characteristic: {
    highestStat: urlResolver('getStatById')
  },
  MoveStatAffect: {
    move: urlResolver('getMoveById')
  },
  Nature: {
    decreasedStat: urlResolver('getStatById'),
    increasedStat: urlResolver('getStatById'),
    hatesFlavor: urlResolver('getBerryFlavorById'),
    likesFlavor: urlResolver('getBerryFlavorById')
  },
  MoveBattleStylePreference: {
    moveBattleStyle: urlResolver('getMoveBattleStyleById')
  },
  NatureStatChange: {
    pokeathlonStat: urlResolver('getPokeathlonStatById')
  },
  NaturePokeathlonStatAffect: {
    nature: urlResolver('getNatureById')
  }
}
