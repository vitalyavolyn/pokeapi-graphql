const extractIdFromUrl = (url) => url.match(/\/(-?\d+)\/?$/)[1]

const isNameOnly = (fieldNodes) => {
  const fields = fieldNodes[0].selectionSet.selections.map((field) => field.name.value)
  return fields.length === 1 && fields.includes('name')
}

const urlResolver = (getter) => (parent, _, { dataSources }, { fieldName, fieldNodes }) => {
  const onlyName = isNameOnly(fieldNodes)

  if (onlyName && parent[fieldName].name) {
    return { name: parent[fieldName].name }
  }

  return parent[fieldName]
    ? dataSources.pokeAPI[getter](
        extractIdFromUrl(parent[fieldName].url)
      )
    : null
}

const urlListResolver = (getter) => (parent, _, { dataSources }, { fieldName, fieldNodes }) => {
  const onlyName = isNameOnly(fieldNodes)
  if (onlyName && parent?.[fieldName]?.[0].name) {
    return parent[fieldName]
  }

  return parent[fieldName]
    ? Promise.all(
        parent[fieldName].map((resource) => dataSources.pokeAPI[getter](
          extractIdFromUrl(resource.url)
        ))
      )
    : null
}

module.exports = {
  extractIdFromUrl,
  isNameOnly,
  urlResolver,
  urlListResolver
}
