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
        founded: '27-03-2020',
        description: 'The first of its kind juice destination in town that offers signature fruit based drinks.'
      },
      {
        name: 'Giugi',
        city: 'Los Angeles',
        state: 'California',
        founded: '27-06-2020',
        description: 'Recycled plastic travel gear.'
      },
      {
        name: 'Banjo Inc',
        city: 'Los Angeles',
        state: 'California',
        founded: '27-06-2020',
        description: 'Online music store and musical intrument repairs at home.'
      },
      {
        name: 'Kong Studios',
        city: 'Los Angeles',
        state: 'California',
        founded: '27-01-2020',
        description: 'World class SFX Studio.'
      },
      {
        name: 'DigitalOceanic Inc',
        city: 'New York City',
        state: 'New York',
        founded: '24-06-2011',
        description: 'DigitalOceanic, Inc. is an American cloud infrastructure provider headquartered in New York City with data centers worldwide.'
      },
      {
        name: 'SendIt',
        city: 'Los Angeles',
        state: 'California',
        founded: '27-01-2020',
        description: 'Delivery anywhere on Earth.'
      },
      {
        name: 'BeeBee',
        city: 'Los Angeles',
        state: 'California',
        founded: '27-02-2020',
        description: 'Smart lighting devices for your home.'
      },
      {
        name: 'BrightWing',
        city: 'Bangalore',
        state: 'Karnataka',
        founded: '27-01-2020',
        description: 'Optimize your cloud resources.'
      },
      {
        name: 'Hope Platform',
        city: 'Lagos',
        state: 'Nigeria',
        founded: '27-01-2020',
        description: 'Fundraising for the needy.'
      },
      {
        name: 'Jessicas Hardware Shop',
        city: 'Los Angeles',
        state: 'California',
        founded: '27-04-2021',
        description: 'World class SFX Studio.'
      },
      {
        name: 'Unitize',
        city: 'San Francisco',
        state: 'California',
        founded: '27-01-2021',
        description: 'Saas platform for manufacturing and engineering companies.'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Companies', null, {});
  }
};
