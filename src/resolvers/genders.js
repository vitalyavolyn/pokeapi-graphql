const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Gender: {
    requiredForEvolution: urlListResolver('getPokemonSpeciesById')
  },
  PokemonSpeciesGender: {
    pokemonSpecies: urlResolver('getPokemonSpeciesById')
  }
}
