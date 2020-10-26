const { urlResolver } = require('../utils')

module.exports = {
  Ability: {
    generation: urlResolver('getGenerationById')
  }
}
