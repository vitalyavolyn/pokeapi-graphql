# Yet Another GraphQL wrapper for PokeAPI

*This is a learning project. It's not intended for production use and it may be slow.*

## TODO

- [x] Split all resolvers into separate files
- [x] Support all API endpoints and types
- [x] Check all missing properties in types
- [ ] Change all lists to [connections](https://graphql.org/learn/pagination) for pagination.
- [x] Do not make additional API requests when requesting only `name` of NamedAPIResource
- [ ] If possible, add an optional parameter for `Name`, `FlavorText` to specify language
- [ ] Ability to search resources by `name` and not just `id` if `id` is `Int` (already possible in PokeAPI) (maybe just `union IdOrName = Int | String`)

## Installation and usage

### Clone this repository and install dependencies

```sh
git clone https://github.com/vitalyavolyn/pokeapi-graphql.git
cd pokeapi-graphql
yarn
```

### (Optional, but recommended) Launch local PokeAPI instance

If you don't want to bother PokeAPI maintainers and not to hit rate limits you should launch PokeAPI locally.

You also want you own PokeAPI because this wrapper often requests **a ton** of data, which is disallowed by pokeapi.co.

Here you have two options: launching a PokeAPI python server with Docker or using static data from [PokeAPI/api-data](https://github.com/PokeAPI/api-data). Static data is faster, but it doesn't support names in queries (for example, you can't query Fire type using `type(id: "fire")`, use `type(id: "10")` instead.)

#### Option 1: Docker

Instructions on how to do this can be found in the [PokeAPI repository](https://github.com/PokeAPI/pokeapi#docker-compose)

#### Option 2: Static file server

Clone [PokeAPI/api-data](https://github.com/PokeAPI/api-data) and serve `data` directory using HTTP server of your choice.

```sh
git clone https://github.com/PokeAPI/api-data.git
cd api-data/data
npx serve
```

You need to provide `POKEAPI_STATIC` environment variable to request `/index.json` for every request, since this is how data is structured.

### Start GraphQL server

```sh
# If you have your instance of PokeAPI running
export POKEAPI=http://localhost:PORT

# If you use static file server
export POKEAPI_STATIC=1

yarn start
```

Success! Now you should be able to see GraphQL Playground at http://localhost:3000/graphql

Try these example queries:

```graphql
# Get all fire type pokemon names

query {
  type(id: "fire") {
    pokemon {
      pokemon {
        name
      }
    }
  }
}
```

```graphql
# Find all damage relations of Fire type

query {
  type(id: "fire") {
    damageRelations {
      noDamageTo { name }
      halfDamageTo { name }
      doubleDamageTo { name }
      noDamageFrom { name }
      halfDamageFrom { name }
      doubleDamageFrom { name }
    }
  }
}
```
