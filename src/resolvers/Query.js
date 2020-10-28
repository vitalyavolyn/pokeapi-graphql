const resolverByIdParam = (fn) => (_, { id }, { dataSources }) => dataSources.pokeAPI[fn](id)

// TODO: invent Connections because this is very slow on large sets
const resolverWithoutParams = (fn) => (_, __, { dataSources }, { fieldNodes }) => dataSources.pokeAPI[fn](fieldNodes)

module.exports = {
  Query: {
    allPokemon: resolverWithoutParams('getPokemon'),
    pokemon: resolverByIdParam('getPokemonById'),

    pokemonForms: resolverWithoutParams('getPokemonForms'),
    pokemonForm: resolverByIdParam('getPokemonFormById'),

    allPokemonSpecies: resolverWithoutParams('getPokemonSpecies'),
    pokemonSpecies: resolverByIdParam('getPokemonSpeciesById'),

    moves: resolverWithoutParams('getMoves'),
    move: resolverByIdParam('getMoveById'),

    moveAilments: resolverWithoutParams('getMoveAilments'),
    moveAilment: resolverByIdParam('getMoveAilmentById'),

    moveBattleStyles: resolverWithoutParams('getMoveBattleStyles'),
    moveBattleStyle: resolverByIdParam('getMoveBattleStyleById'),

    moveCategories: resolverWithoutParams('getMoveCategories'),
    moveCategory: resolverByIdParam('getMoveCategoryById'),

    moveDamageClasses: resolverWithoutParams('getMoveDamageClasses'),
    moveDamageClass: resolverByIdParam('getMoveDamageClassById'),

    moveLearnMethods: resolverWithoutParams('getMoveLearnMethods'),
    moveLearnMethod: resolverByIdParam('getMoveLearnMethodById'),

    moveTargets: resolverWithoutParams('getMoveTargets'),
    moveTarget: resolverByIdParam('getMoveTargetById'),

    types: resolverWithoutParams('getTypes'),
    type: resolverByIdParam('getTypeById'),

    generations: resolverWithoutParams('getGenerations'),
    generation: resolverByIdParam('getGenerationById'),

    versions: resolverWithoutParams('getVersions'),
    version: resolverByIdParam('getVersionById'),

    versionGroups: resolverWithoutParams('getVersionGroups'),
    versionGroup: resolverByIdParam('getVersionGroupById'),

    regions: resolverWithoutParams('getRegions'),
    region: resolverByIdParam('getRegionById'),

    items: resolverWithoutParams('getItems'),
    item: resolverByIdParam('getItemById'),

    itemCategories: resolverWithoutParams('getItemCategories'),
    itemCategory: resolverByIdParam('getItemCategoryById'),

    itemAttributes: resolverWithoutParams('getItemAttributes'),
    itemAttribute: resolverByIdParam('getItemAttributeById'),

    itemFlingEffects: resolverWithoutParams('getItemFlingEffects'),
    itemFlingEffect: resolverByIdParam('getItemFlingEffectById'),

    itemPockets: resolverWithoutParams('getItemPockets'),
    itemPocket: resolverByIdParam('getItemPocketById'),

    machines: resolverWithoutParams('getMachines'),
    machine: resolverByIdParam('getMachineById'),

    abilities: resolverWithoutParams('getAbilities'),
    ability: resolverByIdParam('getAbilityById'),

    languages: resolverWithoutParams('getLanguages'),
    language: resolverByIdParam('getLanguageById'),

    natures: resolverWithoutParams('getNatures'),
    nature: resolverByIdParam('getNatureById'),

    stats: resolverWithoutParams('getStats'),
    stat: resolverByIdParam('getStatById'),

    pokeathlonStats: resolverWithoutParams('getPokeathlonStats'),
    pokeathlonStat: resolverByIdParam('getPokeathlonStatById'),

    characteristics: resolverWithoutParams('getCharacteristics'),
    characteristic: resolverByIdParam('getCharacteristicById'),

    locations: resolverWithoutParams('getLocations'),
    location: resolverByIdParam('getLocationById'),

    locationAreas: resolverWithoutParams('getLocationAreas'),
    locationArea: resolverByIdParam('getLocationAreaById'),

    encounterMethods: resolverWithoutParams('getEncounterMethods'),
    encounterMethod: resolverByIdParam('getEncounterMethodById'),

    encounterConditions: resolverWithoutParams('getEncounterConditions'),
    encounterCondition: resolverByIdParam('getEncounterConditionById'),

    encounterConditionValues: resolverWithoutParams('getEncounterConditionValues'),
    encounterConditionValue: resolverByIdParam('getEncounterConditionValueById'),

    palParkAreas: resolverWithoutParams('getPalParkAreas'),
    palParkArea: resolverByIdParam('getPalParkAreaById'),

    berries: resolverWithoutParams('getBerries'),
    berry: resolverByIdParam('getBerryById'),

    berryFirmnesses: resolverWithoutParams('getBerryFirmnesses'),
    berryFirmness: resolverByIdParam('getBerryFirmnessById'),

    berryFlavors: resolverWithoutParams('getBerryFlavors'),
    berryFlavor: resolverByIdParam('getBerryFlavorById'),

    evolutionChains: resolverWithoutParams('getEvolutionChains'),
    evolutionChain: resolverByIdParam('getEvolutionChainById'),

    evolutionTriggers: resolverWithoutParams('getEvolutionTriggers'),
    evolutionTrigger: resolverByIdParam('getEvolutionTriggerById'),

    eggGroups: resolverWithoutParams('getEggGroups'),
    eggGroup: resolverByIdParam('getEggGroupById'),

    pokemonColors: resolverWithoutParams('getPokemonColors'),
    pokemonColor: resolverByIdParam('getPokemonColorById'),

    pokemonHabitats: resolverWithoutParams('getPokemonHabitats'),
    pokemonHabitat: resolverByIdParam('getPokemonHabitatById'),

    pokemonShapes: resolverWithoutParams('getPokemonShapes'),
    pokemonShape: resolverByIdParam('getPokemonShapeById'),

    growthRates: resolverWithoutParams('getGrowthRates'),
    growthRate: resolverByIdParam('getGrowthRateById'),

    pokedexes: resolverWithoutParams('getPokedexes'),
    pokedex: resolverByIdParam('getPokedexById'),

    contestTypes: resolverWithoutParams('getContestTypes'),
    contestType: resolverByIdParam('getContestTypeById'),

    contestEffects: resolverWithoutParams('getContestEffects'),
    contestEffect: resolverByIdParam('getContestEffectById'),

    superContestEffects: resolverWithoutParams('getSuperContestEffects'),
    superContestEffect: resolverByIdParam('getSuperContestEffectById'),

    genders: resolverWithoutParams('getGenders'),
    gender: resolverByIdParam('getGenderById')
  }
}
