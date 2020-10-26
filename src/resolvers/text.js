const { urlResolver } = require('../utils')

module.exports = {
  Name: {
    language: urlResolver('getLanguageById')
  },
  Description: {
    language: urlResolver('getLanguageById')
  },
  FlavorText: {
    language: urlResolver('getLanguageById'),
    version: urlResolver('getVersionById')
  },
  VerboseEffect: {
    language: urlResolver('getLanguageById')
  },
  VersionGroupFlavorText: {
    language: urlResolver('getLanguageById'),
    versionGroup: urlResolver('getVersionGroupById')
  },
  Effect: {
    language: urlResolver('getLanguageById')
  },
  AbilityEffectChange: {
    versionGroup: urlResolver('getVersionGroupById')
  },
  AbilityFlavorText: {
    language: urlResolver('getLanguageById'),
    versionGroup: urlResolver('getVersionGroupById')
  },
  MoveFlavorText: {
    language: urlResolver('getLanguageById'),
    versionGroup: urlResolver('getVersionGroupById')
  },
  AwesomeName: {
    language: urlResolver('getLanguageById')
  },
  ContestName: {
    language: urlResolver('getLanguageById')
  }
}
