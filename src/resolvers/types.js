const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Type: {
    moves: urlListResolver('getMoveById'),
    generation: urlResolver('getGenerationById'),
    moveDamageClass: urlResolver('getMoveDamageClassById')
  },
  TypePokemon: {
    pokemon: urlResolver('getPokemonById')
  },
  TypeRelations: {
    noDamageTo: urlListResolver('getTypeById'),
    halfDamageTo: urlListResolver('getTypeById'),
    doubleDamageTo: urlListResolver('getTypeById'),
    noDamageFrom: urlListResolver('getTypeById'),
    halfDamageFrom: urlListResolver('getTypeById'),
    doubleDamageFrom: urlListResolver('getTypeById')
  }
}
