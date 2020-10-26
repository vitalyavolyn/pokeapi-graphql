const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Pokedex: {
    region: urlResolver('getRegionById'),
    versionGroups: urlListResolver('getVersionGroupById')
  },
  PokemonEntry: {
    pokemonSpecies: urlResolver('getPokemonSpeciesById')
  }
}
