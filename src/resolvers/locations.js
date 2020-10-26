const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Region: {
    mainGeneration: urlResolver('getGenerationById'),
    versionGroups: urlListResolver('getVersionGroupById'),
    locations: urlListResolver('getLocationById'),
    pokedexes: urlListResolver('getPokedexById')
  },
  Location: {
    region: urlResolver('getRegionById'),
    areas: urlListResolver('getLocationAreaById')
  },
  LocationArea: {
    location: urlResolver('getLocationById')
  },
  PalParkEncounterSpecies: {
    pokemonSpecies: urlResolver('getPokemonSpeciesById')
  }
}
