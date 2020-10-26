const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  Item: {
    flingEffect: urlResolver('getItemFlingEffectById'),
    category: urlResolver('getItemCategoryById'),
    attributes: urlListResolver('getItemAttributeById'),
    babyTriggerFor: urlResolver('getEvolutionChainById')
  },
  ItemAttribute: {
    items: urlListResolver('getItemById')
  },
  ItemFlingEffect: {
    items: urlListResolver('getItemById')
  },
  ItemHolderPokemon: {
    pokemon: urlResolver('getPokemonById')
  },
  ItemHolderPokemonVersionDetail: {
    version: urlResolver('getVersionById')
  },
  MachineVersionDetail: {
    machine: urlResolver('getMachineById'),
    versionGroup: urlResolver('getVersionGroupById')
  },
  Machine: {
    item: urlResolver('getItemById'),
    move: urlResolver('getMoveById'),
    versionGroup: urlResolver('getVersionGroupById')
  },
  ItemCategory: {
    items: urlListResolver('getItemById'),
    pocket: urlResolver('getItemPocketById')
  },
  ItemPocket: {
    categories: urlListResolver('getItemCategoryById')
  }
}
