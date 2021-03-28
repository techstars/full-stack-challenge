'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Companies', [{
        name: 'Buzzinga Inc',
        city: 'Denver',
        state: 'CO',
        description: 'Buzzinga Inc manufactures innovative party poppers made for every occasion and event.'
      },
      {
        name: 'Kale-Berry',
        city: 'Los Angeles',
        state: 'California',
        description: 'The first of its kind juice destination in town that offers signature fruit based drinks.'
      },
      {
        name: 'Giugi',
        city: 'Los Angeles',
        state: 'California',
        description: 'Recycled plastic travel gear.'
      },
      {
        name: 'Banjo Inc',
        city: 'Los Angeles',
        state: 'California',
        description: 'Online music store and musical intrument repairs at home.'
      },
      {
        name: 'Kong Studios',
        city: 'Los Angeles',
        state: 'California',
        description: 'World class SFX Studio.'
      },
      {
        name: 'DigitalOceanic Inc',
        city: 'New York City',
        state: 'New York',
        description: 'DigitalOceanic, Inc. is an American cloud infrastructure provider headquartered in New York City with data centers worldwide.'
      },
      {
        name: 'SendIt',
        city: 'Los Angeles',
        state: 'California',
        description: 'Delivery anywhere on Earth.'
      },
      {
        name: 'BeeBee',
        city: 'Los Angeles',
        state: 'California',
        description: 'Smart lighting devices for your home.'
      },
      {
        name: 'BrightWing',
        city: 'Bangalore',
        state: 'Karnataka',
        description: 'Optimize your cloud resources.'
      },
      {
        name: 'Hope Platform',
        city: 'Lagos',
        state: 'Nigeria',
        description: 'Fundraising for the needy.'
      },
      {
        name: 'Jessicas Hardware Shop',
        city: 'Los Angeles',
        state: 'California',
        description: 'World class SFX Studio.'
      },
      {
        name: 'Unitize',
        city: 'San Francisco',
        state: 'California',
        description: 'Saas platform for manufacturing and engineering companies.'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Companies', null, {});
  }
};
