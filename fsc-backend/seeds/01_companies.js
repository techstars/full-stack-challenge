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
        },
        {
          id: 4,
          name: 'Pretentious.io',
          city: 'Athens',
          state: 'GA',
          description: 'Nobody really understands us. We have been developing a new way to live, a new way to be, and even a new way to thrive. If you have to ask, you will not get it.',
          foundedDate: new Date(2014, 6, 22)
        },
        {
          id: 5,
          name: 'Honesty & Trust Bank',
          city: 'Seattle',
          state: 'WA',
          description: 'We make a point of ensuring you know how trustworthy we are. We have never taken the money of some poor unexpecting soul, and we absolutely did not launder the profits in a side corporation. We are honesty and trust.',
          foundedDate: new Date(1997, 8, 30)
        },
        {
          id: 6,
          name: '2020 Commiseration Brigade',
          city: 'Lincoln',
          state: 'NE',
          description: '2CB wants to remind you that 2020 has had Australian fires, the threat of World War III, a deadly pandemic, invasive wasps, and now riots and police brutality. No point here, just reminding everyone that that was all this year.',
          foundedDate: new Date(1997, 8, 30)
        },
        {
          id: 7,
          name: 'Grand Horizons Light Switch Covers',
          city: 'Portland',
          state: 'OR',
          description: 'The world is changing. We must adapt to change with it. Therefore, at Grand Horizons, we make light switch covers of the purest plastic, in the most innovative alabaster color you have seen. We are the future.',
          foundedDate: new Date(1997, 8, 30)
        },
      ])
      .then(function() {
        return knex.raw(`SELECT setval('companies_id_seq', (SELECT MAX(id) FROM companies))`)
        });
    });
};
