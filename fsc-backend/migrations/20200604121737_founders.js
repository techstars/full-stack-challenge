exports.up = knex => (
  knex.schema.createTable('founders', table => {
    table.increments();
    table.string('firstName').defaultTo('');
    table.string('lastName').defaultTo('');
    table.string('title').defaultTo('');
    table.integer('companyId').references('companies.id').onDelete('CASCADE');
  })
)

exports.down = knex => knex.schema.dropTableIfExists('founders');
