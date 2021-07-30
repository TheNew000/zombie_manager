module.exports = {
    Query: {
      zombies: (_, __, { dataSources }) =>
        dataSources.zombieAPI.findAllZombies(),
      locations: (_, __, { dataSources }) =>
        dataSources.zombieAPI.findAllLocations(),
    },
    Mutation: {
        moveZombie: async (_, { zombieID, locationID }, { dataSources }) => {
          const zombie = await dataSources.zombieAPI.moveZombie( zombieID, locationID );
          if (zombie) {
            return {
                success: true,
                message: `Zombie ID: ${zombieID} moved to location ID: ${locationID}`,
            };
          }
        },
    }      
  };
  