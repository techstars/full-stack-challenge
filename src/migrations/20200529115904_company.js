
exports.up = (knex) => {
  return knex.schema.createTable('company', (table) => {
    table.increments('id').primary()
    table.text('name').notNullable()
    table.text('description').notNullable()
    table.text('city').notNullable()
    table.text('state').notNullable()
    table.date('date_founded')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('company')
}
