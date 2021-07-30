const { DataSource } = require('apollo-datasource');

class ZombieAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  //genuinely not sure if this is best practice here?  I feel like the magic of graphQL
  //might be in this layer and I am missing it?
  async findAllZombies() {
    const zombies = await this.store.zombies.findAll();
    const locations = await this.findAllLocations();
    zombies.forEach((zombie, index, arr) => {
      const loc = locations.find((i) => zombie.location === i.id);
      zombie.location = {
        name: loc.name,
        id: loc.id
      };
      arr[index] = zombie;
    });
    return zombies;
  }

  async findAllLocations() {
    const locations = await this.store.locations.findAll();
    return locations;
  }

  async moveZombie( zombieID, newLocationID ) {
    const updatedZombie = await this.store.zombies.update({
      location: newLocationID
    },
    { 
      where: {id: zombieID}
    });
    return updatedZombie[0];
  }
}

module.exports = ZombieAPI;
