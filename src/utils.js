const extractIdFromUrl = (url) => url.match(/\/(-?\d+)\/?$/)[1]

const urlResolver = (getter) => (parent, _, { dataSources }, { fieldName }) => parent[fieldName]
  ? dataSources.pokeAPI[getter](
      extractIdFromUrl(parent[fieldName].url)
    )
  : null

const urlListResolver = (getter) => (parent, _, { dataSources }, { fieldName }) => parent[fieldName]
  ? Promise.all(
      parent[fieldName].map((resource) => dataSources.pokeAPI[getter](
        extractIdFromUrl(resource.url)
      ))
    )
  : null

module.exports = {
  extractIdFromUrl,
  urlResolver,
  urlListResolver
}
