exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          id: 1,
          name: 'Dark Eddie\'s Infernal Depot',
          city: 'El Paso',
          state: 'TX',
          description: 'A family-friendly store selling multiple devices to allow you to conquer the world in the name of evil.',
          foundedDate: new Date(2015, 9, 13)
        },
        {
          id: 2,
          name: 'Brasserie du Graisse',
          city: 'Laguna Beach',
          state: 'CA',
          description: 'Combining the atmosphere of authentic Parisian-style dining with the vast amount of grease you can usually only get with fast food.',
          foundedDate: new Date(2010, 10, 4)
        },
        {
          id: 3,
          name: 'Rantr',
          city: 'Jacksonville',
          state: 'FL',
          description: 'Inspired by Twitter, Rantr allows you to share your thoughts to the world with only two restrictions: all caps and a minimum of 1000 characters.'
        }
      ])
      .then(function() {
        return knex.raw(`SELECT setval('companies_id_seq', (SELECT MAX(id) FROM companies))`)
        });
    });
};
