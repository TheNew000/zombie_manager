'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('zombies', [{
      name: 'John',
      location: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Danny',
      location: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kimberly',
      location: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Billy',
      location: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wilson',
      location: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Gregory',
      location: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sally',
      location: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jennifer',
      location: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samantha',
      location: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jethro',
      location: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Allison',
      location: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mark',
      location: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('zombies', null, {});
  }
};
