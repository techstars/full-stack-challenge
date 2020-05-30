
exports.up = (knex) => {
  return knex.schema.createTable('founder', (table) => {
    table.increments('id').primary()
    table.text('first_name').notNullable()
    table.text('last_name').notNullable()
    table.text('title').notNullable()
    table.integer('company_id')
      .notNullable()
      .references('id')
      .inTable('company')
      .onDelete('CASCADE')
      .index()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('founder')
}
