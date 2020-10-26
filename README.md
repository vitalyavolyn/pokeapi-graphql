# Yet Another GraphQL wrapper for PokeAPI

*This is a learning project. It's not intended for production use and it may be slow.*

## TODO

- [x] Split all resolvers into separate files
- [x] Support all API endpoints and types
- [x] Check all missing properties in types
- [ ] Change all lists to [connections](https://graphql.org/learn/pagination) for pagination.
- [ ] Do not make additional API requests when requesting only `name` of NamedAPIResource
- [ ] If possible, add an optional parameter for `Name`, `FlavorText` to specify language
- [ ] Ability to search resources by `name` and not just `id` if `id` is `Int` (already possible in PokeAPI) (maybe just `union IdOrName = Int | String`)

## Installation and usage

### Clone this repository and install dependencies

```sh
git clone https://github.com/vitalyavolyn/pokeapi-graphql.git
cd pokeapi-graphql
yarn
```

### (Optional, but recommended) Launch local PokeAPI instance with Docker

If you don't want to bother PokeAPI maintainers and not to hit rate limits you should launch PokeAPI locally.

You also want you own PokeAPI because this wrapper often requests **a ton** of data, which is disallowed by pokeapi.co.

Instructions on how to do this can be found in the [PokeAPI repository](https://github.com/PokeAPI/pokeapi#docker-compose)

### Start GraphQL server

```sh
# If you have your instance of PokeAPI running
export POKEAPI=http://localhost

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
