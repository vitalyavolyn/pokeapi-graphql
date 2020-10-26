const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Pokemon: {
    forms: urlListResolver('getPokemonFormById'),
    types: urlListResolver('getTypeById'),
    species: urlResolver('getPokemonSpeciesById'),
    locationAreaEncounters: (parent, _, { dataSources }) => dataSources.pokeAPI.getPokemonEncountersById(
      parent.locationAreaEncounters.match(/\/(\d+)\//)[1]
    )
  },
  PokemonAbility: {
    ability: urlResolver('getAbilityById')
  },
  PokemonMove: {
    move: urlResolver('getMoveById')
  },
  PokemonStat: {
    stat: urlResolver('getStatById')
  },
  PokemonHeldItem: {
    item: urlResolver('getItemById')
  },
  PokemonHeldItemVersion: {
    version: urlResolver('getVersionById')
  },
  PokemonSpecies: {
    evolutionChain: urlResolver('getEvolutionChainById'),
    evolvesFromSpecies: urlResolver('getPokemonSpeciesById'),
    generation: urlResolver('getGenerationById'),
    eggGroups: urlListResolver('getEggGroupById'),
    color: urlResolver('getPokemonColorById'),
    habitat: urlResolver('getPokemonHabitatById'),
    growthRate: urlResolver('getGrowthRateById'),
    shape: urlResolver('getPokemonShapeById')
  },
  PokemonSpeciesDexEntry: {
    pokedex: urlResolver('getPokedexById')
  },
  Genus: {
    language: urlResolver('getLanguageById')
  },
  PokemonSpeciesVariety: {
    pokemon: urlResolver('getPokemonById')
  },
  PokemonMoveVersion: {
    versionGroup: urlResolver('getVersionGroupById'),
    moveLearnMethod: urlResolver('getMoveLearnMethodById')
  },
  PokemonForm: {
    versionGroup: urlResolver('getVersionGroupById')
  },
  PalParkEncounterArea: {
    area: urlResolver('getPalParkAreaById')
  },
  LocationAreaEncounter: {
    locationArea: urlResolver('getLocationAreaById')
  },
  EggGroup: {
    pokemonSpecies: urlListResolver('getPokemonSpeciesById')
  },
  PokemonColor: {
    pokemonSpecies: urlListResolver('getPokemonSpeciesById')
  },
  PokemonHabitat: {
    pokemonSpecies: urlListResolver('getPokemonSpeciesById')
  },
  GrowthRate: {
    pokemonSpecies: urlListResolver('getPokemonSpeciesById')
  },
  PokemonShape: {
    pokemonSpecies: urlListResolver('getPokemonSpeciesById')
  }
}
