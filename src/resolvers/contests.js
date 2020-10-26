const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  ContestType: {
    berryFlavor: urlResolver('getBerryFlavorById')
  },
  SuperContestEffect: {
    moves: urlListResolver('getMoveById')
  },
  ContestComboDetail: {
    useBefore: urlListResolver('getMoveById'),
    useAfter: urlListResolver('getMoveById')
  }
}
