const merge = require('lodash.merge')

module.exports = merge(
  require('./Query'),
  require('./abilities'),
  require('./berries'),
  require('./contests'),
  require('./encounters'),
  require('./evolution'),
  require('./games'),
  require('./genders'),
  require('./items'),
  require('./locations'),
  require('./moves'),
  require('./pokedexes'),
  require('./pokemon'),
  require('./stats'),
  require('./text'),
  require('./types')
)
