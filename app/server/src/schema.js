const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        zombies: [Zombie]
        zombie(id: ID!): Zombie
        locations: [Location]!
        location(id: ID!): Location
    }

    type Mutation {
        moveZombie(zombieID: ID!, locationID: ID!): MoveUpdateResponse!
    }

    type MoveUpdateResponse {
        success: Boolean!
        message: String
    }
  
    type Zombie {
        id: ID!
        name: String
        location: Location
    }

    type Location {
        id: ID!
        name: String
    }
`;

module.exports = typeDefs;
