const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Version: {
    versionGroup: urlResolver('getVersionGroupById')
  },
  VersionGroup: {
    generation: urlResolver('getGenerationById'),
    regions: urlListResolver('getRegionById'),
    versions: urlListResolver('getVersionById'),
    moveLearnMethods: urlListResolver('getMoveLearnMethodById'),
    pokedexes: urlListResolver('getPokedexById')
  },
  Generation: {
    abilities: urlListResolver('getAbilityById'),
    types: urlListResolver('getTypeById'),
    moves: urlListResolver('getMoveById'),
    mainRegion: urlResolver('getRegionById'),
    pokemonSpecies: urlListResolver('getPokemonSpeciesById'),
    versionGroups: urlListResolver('getVersionGroupById')
  },
  GenerationGameIndex: {
    generation: urlResolver('getGenerationById')
  },
  VersionGameIndex: {
    version: urlResolver('getVersionById')
  }
}
