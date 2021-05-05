'use strict';
const { Locations, Companies, Founders } = require('./mock-data')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Locations', Locations)

      const locations = await queryInterface.sequelize.query(`SELECT id from Locations`);
      const locationRows = locations[0];

      await queryInterface.bulkInsert('Companies', [
        {
          Name: 'Google',
          Location: locationRows[0].id,
          Founded: 1954,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: 'Amazon',
          Location: locationRows[0].id,
          Founded: 1954,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            Name: 'Walmart',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            Name: 'Apple',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            Name: 'AT&T',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            Name: 'Exxon',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            Name: 'AskJeeves',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            Name: 'Bing',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            Name: 'Sound Cloud',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            Name: 'Spotify',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            Name: 'Pandora',
            Location: locationRows[0].id,
            Founded: 1954,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ])

      const companies = await queryInterface.sequelize.query(`SELECT id from Companies`)
      const companyRows = companies[0];

      return queryInterface.bulkInsert('Founders', [
        {
          Name: 'Dwayne Johnson',
          Title: 'CEO',
          Company: companyRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            Name: 'John Doe',
            Title: 'CTO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Jane Doe',
            Title: 'CFO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Rich Sanchez',
            Title: 'CEO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Rick Sanchez',
            Title: 'CEO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Justin Smith',
            Title: 'CFO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Dwayne Therock',
            Title: 'CEO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Darth Vader',
            Title: 'CEO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Luke Skywalker',
            Title: 'CEO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'John Smith',
            Title: 'CEO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Ash Ketchum',
            Title: 'CEO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Morty Sanchez',
            Title: 'CEO',
            Company: companyRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },

    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', {}, null)
    await queryInterface.bulkDelete('Locations', {}, null)
    await queryInterface.bulkDelete('Founders', {}, null)
  }
};
