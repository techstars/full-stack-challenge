
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
        },
        {
          id: 5,
          firstName: 'Jacob',
          lastName: 'Jacobson',
          title: 'Founder',
          companyId: 4
        },
        {
          id: 6,
          firstName: 'Argon',
          lastName: 'Hydrogenous',
          title: 'CEO',
          companyId: 6
        },
        {
          id: 7,
          firstName: 'Mitzy',
          lastName: 'Handgepackaufbewarung',
          title: 'CEO',
          companyId: 7
        },
        {
          id: 8,
          firstName: 'Antimony',
          lastName: 'Technetium',
          title: 'CEO',
          companyId: 6
        },
      ]).then(function() {
        return knex.raw(`SELECT setval('founders_id_seq', (SELECT MAX(id) FROM founders))`)
        });
    });
};
