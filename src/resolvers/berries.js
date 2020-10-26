const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Berry: {
    firmness: urlResolver('getBerryFirmnessById'),
    item: urlResolver('getItemById'),
    naturalGiftType: urlResolver('getTypeById')
  },
  BerryFlavor: {
    contestType: urlResolver('getContestTypeById')
  },
  BerryFlavorMap: {
    flavor: urlResolver('getBerryFlavorById')
  },
  BerryFirmness: {
    berries: urlListResolver('getBerryById')
  },
  FlavorBerryMap: {
    berry: urlResolver('getBerryById')
  }
}
