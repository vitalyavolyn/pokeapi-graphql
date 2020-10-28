const { RESTDataSource } = require('apollo-datasource-rest')
const camelcaseKeys = require('camelcase-keys')
const Bottleneck = require('bottleneck')
const fetch = require('node-fetch')

const { extractIdFromUrl, isNameOnly } = require('./utils')

const camelcase = (obj) => camelcaseKeys(obj, { deep: true })

function getResourceById (path) {
  return async function (id) {
    const response = await this.get(`/${path}/${id}`)
    return camelcase(response)
  }
}

function getAllResourcesFromIndex (path, subFn) {
  return async function (fieldNodes) {
    const { results } = await this.get(`/${path}`, { limit: 5000 }) // TODO: is 5000 enough?

    const onlyName = isNameOnly(fieldNodes)

    if (onlyName && results?.[0]?.name) {
      return results
    }

    return Promise.all(results.map((t) => subFn(extractIdFromUrl(t.url))))
  }
}

const limiter = new Bottleneck({
  maxConcurrent: 5
})

const rateLimitedFetch = limiter.wrap(fetch)

exports.PokeAPI = class PokeAPI extends RESTDataSource {
  constructor () {
    super(rateLimitedFetch)
    this.baseURL = (process.env.POKEAPI || 'https://pokeapi.co') + '/api/v2'

    this.getPokemonById = getResourceById('pokemon')
    this.getPokemonFormById = getResourceById('pokemon-form')
    this.getPokemonSpeciesById = getResourceById('pokemon-species')
    this.getTypeById = getResourceById('type')
    this.getStatById = getResourceById('stat')
    this.getPokeathlonStatById = getResourceById('pokeathlon-stat')
    this.getNatureById = getResourceById('nature')
    this.getCharacteristicById = getResourceById('characteristic')
    this.getAbilityById = getResourceById('ability')
    this.getLanguageById = getResourceById('language')
    this.getGenerationById = getResourceById('generation')
    this.getVersionById = getResourceById('version')
    this.getVersionGroupById = getResourceById('version-group')
    this.getRegionById = getResourceById('region')
    this.getLocationById = getResourceById('location')
    this.getLocationAreaById = getResourceById('location-area')
    this.getMoveById = getResourceById('move')
    this.getMoveAilmentById = getResourceById('move-ailment')
    this.getMoveCategoryById = getResourceById('move-category')
    this.getMoveBattleStyleById = getResourceById('move-battle-style')
    this.getMoveDamageClassById = getResourceById('move-damage-class')
    this.getMoveLearnMethodById = getResourceById('move-learn-method')
    this.getMoveTargetById = getResourceById('move-target')
    this.getItemById = getResourceById('item')
    this.getItemCategoryById = getResourceById('item-category')
    this.getItemPocketById = getResourceById('item-pocket')
    this.getItemAttributeById = getResourceById('item-attribute')
    this.getItemFlingEffectById = getResourceById('item-fling-effect')
    this.getMachineById = getResourceById('machine')
    this.getEncounterMethodById = getResourceById('encounter-method')
    this.getEncounterConditionById = getResourceById('encounter-condition')
    this.getEncounterConditionValueById = getResourceById('encounter-condition-value')
    this.getPalParkAreaById = getResourceById('pal-park-area')
    this.getBerryById = getResourceById('berry')
    this.getBerryFirmnessById = getResourceById('berry-firmness')
    this.getBerryFlavorById = getResourceById('berry-flavor')
    this.getEvolutionChainById = getResourceById('evolution-chain')
    this.getEvolutionTriggerById = getResourceById('evolution-trigger')
    this.getEggGroupById = getResourceById('egg-group')
    this.getPokemonColorById = getResourceById('pokemon-color')
    this.getPokemonHabitatById = getResourceById('pokemon-habitat')
    this.getGrowthRateById = getResourceById('growth-rate')
    this.getPokemonShapeById = getResourceById('pokemon-shape')
    this.getPokedexById = getResourceById('pokedex')
    this.getContestTypeById = getResourceById('contest-type')
    this.getContestEffectById = getResourceById('contest-effect')
    this.getSuperContestEffectById = getResourceById('super-contest-effect')
    this.getGenderById = getResourceById('gender')

    this.getPokemon = getAllResourcesFromIndex('pokemon', this.getPokemonById.bind(this))
    this.getPokemonForms = getAllResourcesFromIndex('pokemon-form', this.getPokemonFormById.bind(this))
    this.getPokemonSpecies = getAllResourcesFromIndex('pokemon-species', this.getPokemonSpeciesById.bind(this))
    this.getTypes = getAllResourcesFromIndex('type', this.getTypeById.bind(this))
    this.getMoves = getAllResourcesFromIndex('move', this.getMoveById.bind(this))
    this.getMoveAilments = getAllResourcesFromIndex('move-ailment', this.getMoveAilmentById.bind(this))
    this.getMoveBattleStyles = getAllResourcesFromIndex('move-battle-style', this.getMoveBattleStyleById.bind(this))
    this.getMoveCategories = getAllResourcesFromIndex('move-category', this.getMoveCategoryById.bind(this))
    this.getMoveDamageClasses = getAllResourcesFromIndex('move-damage-class', this.getMoveDamageClassById.bind(this))
    this.getMoveLearnMethods = getAllResourcesFromIndex('move-learn-method', this.getMoveLearnMethodById.bind(this))
    this.getMoveTargets = getAllResourcesFromIndex('move-target', this.getMoveTargetById.bind(this))
    this.getStats = getAllResourcesFromIndex('stat', this.getStatById.bind(this))
    this.getPokeathlonStats = getAllResourcesFromIndex('pokeathlon-stat', this.getPokeathlonStatById.bind(this))
    this.getNatures = getAllResourcesFromIndex('nature', this.getNatureById.bind(this))
    this.getCharacteristics = getAllResourcesFromIndex('characteristic', this.getCharacteristicById.bind(this))
    this.getAbilities = getAllResourcesFromIndex('ability', this.getAbilityById.bind(this))
    this.getLanguages = getAllResourcesFromIndex('language', this.getLanguageById.bind(this))
    this.getItems = getAllResourcesFromIndex('item', this.getItemById.bind(this))
    this.getItemCategories = getAllResourcesFromIndex('item-category', this.getItemCategoryById.bind(this))
    this.getItemAttributes = getAllResourcesFromIndex('item-attribute', this.getItemAttributeById.bind(this))
    this.getItemFlingEffects = getAllResourcesFromIndex('item-fling-effect', this.getItemFlingEffectById.bind(this))
    this.getItemPockets = getAllResourcesFromIndex('item-pocket', this.getItemPocketById.bind(this))
    this.getMachines = getAllResourcesFromIndex('machine', this.getMachineById.bind(this))
    this.getVersions = getAllResourcesFromIndex('version', this.getVersionById.bind(this))
    this.getGenerations = getAllResourcesFromIndex('generation', this.getGenerationById.bind(this))
    this.getVersionGroups = getAllResourcesFromIndex('version-group', this.getVersionGroupById.bind(this))
    this.getRegions = getAllResourcesFromIndex('region', this.getRegionById.bind(this))
    this.getLocations = getAllResourcesFromIndex('location', this.getLocationById.bind(this))
    this.getLocationAreas = getAllResourcesFromIndex('location-area', this.getLocationAreaById.bind(this))
    this.getEncounterMethods = getAllResourcesFromIndex('encounter-method', this.getEncounterMethodById.bind(this))
    this.getEncounterConditions = getAllResourcesFromIndex('encounter-condition', this.getEncounterConditionById.bind(this))
    this.getEncounterConditionValues = getAllResourcesFromIndex('encounter-condition-value', this.getEncounterConditionValueById.bind(this))
    this.getPalParkAreas = getAllResourcesFromIndex('pal-park-area', this.getPalParkAreaById.bind(this))
    this.getBerries = getAllResourcesFromIndex('berry', this.getBerryById.bind(this))
    this.getBerryFirmnesses = getAllResourcesFromIndex('berry-firmness', this.getBerryFirmnessById.bind(this))
    this.getBerryFlavors = getAllResourcesFromIndex('berry-flavor', this.getBerryFlavorById.bind(this))
    this.getEvolutionChains = getAllResourcesFromIndex('evolution-chain', this.getEvolutionChainById.bind(this))
    this.getEvolutionTriggers = getAllResourcesFromIndex('evolution-trigger', this.getEvolutionTriggerById.bind(this))
    this.getEggGroups = getAllResourcesFromIndex('egg-group', this.getEggGroupById.bind(this))
    this.getPokemonColors = getAllResourcesFromIndex('pokemon-color', this.getPokemonColorById.bind(this))
    this.getPokemonHabitats = getAllResourcesFromIndex('pokemon-habitat', this.getPokemonHabitatById.bind(this))
    this.getGrowthRates = getAllResourcesFromIndex('growth-rate', this.getGrowthRateById.bind(this))
    this.getPokemonShapes = getAllResourcesFromIndex('pokemon-shape', this.getPokemonShapeById.bind(this))
    this.getPokedexes = getAllResourcesFromIndex('pokedex', this.getPokedexById.bind(this))
    this.getContestTypes = getAllResourcesFromIndex('contest-type', this.getContestTypeById.bind(this))
    this.getContestEffects = getAllResourcesFromIndex('contest-effect', this.getContestEffectById.bind(this))
    this.getSuperContestEffects = getAllResourcesFromIndex('super-contest-effect', this.getContestEffectById.bind(this))
    this.getGenders = getAllResourcesFromIndex('gender', this.getGenderById.bind(this))
  }

  willSendRequest (request) {
    if (process.env.POKEAPI_STATIC) {
      request.path += '/index.json'
    }
  }

  // Has unique URL structure for some reason
  async getPokemonEncountersById (id) {
    const response = await this.get(`/pokemon/${id}/encounters`)
    return camelcase(response)
  }

  // Log all request paths
  get (...arg) {
    console.log(arg[0])
    return super.get(...arg)
  }
}
