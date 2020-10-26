const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const { PokeAPI } = require('./dataSource')

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokeAPI: new PokeAPI()
  })
})

server.applyMiddleware({ app })

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})
