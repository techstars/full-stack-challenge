'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Locations', [{
        id: 1,
        City: 'Westfield',
        State: 'CA',
        createdAt: new Date(),
        updatedAt: new Date()
      }])

      const locations = await queryInterface.sequelize.query(`SELECT id from Locations`);
      const locationRows = locations[0];
      console.log(locations, 'asdlfkasdf!!!!!')
      await queryInterface.bulkInsert('Companies', [{
          id: 1,
          Name: 'Google',
          Location: locationRows[0].id,
          Founded: 1954,
          createdAt: new Date(),
          updatedAt: new Date()
      }])

      const companies = await queryInterface.sequelize.query(`SELECT id from Companies`)
      const companyRows = companies[0];

      return queryInterface.bulkInsert('Founders', [
        {
          id: 1,
          Name: 'Dwayne',
          Title: 1954,
          Company: companyRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Companies', {}, null)
    await queryInterface.bulkDelete('Locations', {}, null)
    await queryInterface.bulkDelete('Founders', {}, null)
  }
};
