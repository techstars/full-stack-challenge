
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('founders').del()
    .then(function () {
      // Inserts seed entries
      return knex('founders').insert([
        {
          id: 1,
          firstName: 'Edward',
          lastName: 'Leviathan',
          title: 'CEO',
          companyId: 1
        },
        {
          id: 2,
          firstName: 'Pierre',
          lastName: 'McDonald',
          title: 'CEO',
          companyId: 2
        },
        {
          id: 3,
          firstName: 'Auguste',
          lastName: 'Burger-Roi',
          title: 'CFO',
          companyId: 2
        },
        {
          id: 4,
          firstName: 'Daniel',
          lastName: 'Smith',
          title: 'Owner',
          companyId: 3
        }
      ]).then(function() {
        return knex.raw(`SELECT setval('founders_id_seq', (SELECT MAX(id) FROM founders))`)
        });
    });
};
