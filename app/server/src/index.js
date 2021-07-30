require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');

const ZombieAPI = require('./datasources/zombie');

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    zombieAPI: new ZombieAPI({ store })
  })
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
  `);
});
