const { urlResolver, urlListResolver } = require('../utils')

module.exports = {
  EncounterMethodRate: {
    encounterMethod: urlResolver('getEncounterMethodById')
  },
  EncounterVersionDetails: {
    version: urlResolver('getVersionById')
  },
  PokemonEncounter: {
    pokemon: urlResolver('getPokemonById')
  },
  VersionEncounterDetail: {
    version: urlResolver('getVersionById')
  },
  Encounter: {
    conditionValues: urlListResolver('getEncounterConditionValueById'),
    method: urlResolver('getEncounterMethodById')
  },
  EncounterConditionValue: {
    condition: urlResolver('getEncounterConditionById')
  },
  EncounterCondition: {
    values: urlListResolver('getEncounterConditionValueById')
  }
}
