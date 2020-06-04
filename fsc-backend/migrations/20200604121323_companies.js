exports.up = knex => (
  knex.schema.createTable('companies', table => {
    table.increments();
    table.string('name').defaultTo('');
    table.string('city').defaultTo('');
    table.string('state').defaultTo('');
    table.text('description').defaultTo('');
    table.timestamps();
  })
);

exports.down = knex => knex.schema.dropTableIfExists('companies');
