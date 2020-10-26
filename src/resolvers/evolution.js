const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  EvolutionChain: {
    babyTriggerItem: urlResolver('getItemById')
  },
  ChainLink: {
    species: urlResolver('getPokemonSpeciesById')
  },
  EvolutionDetail: {
    trigger: urlResolver('getEvolutionTriggerById'),
    item: urlResolver('getItemById'),
    heldItem: urlResolver('getItemById'),
    tradeSpecies: urlResolver('getPokemonSpeciesById'),
    partySpecies: urlResolver('getPokemonSpeciesById'),
    partyType: urlResolver('getTypeById'),
    knownMove: urlResolver('getMoveById'),
    knownMoveType: urlResolver('getTypeById'),
    location: urlResolver('getLocationById')
  },
  EvolutionTrigger: {
    pokemonSpecies: urlListResolver('getPokemonSpeciesById')
  }
}
