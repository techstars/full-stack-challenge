exports.up = function (knex) {
  return knex.schema.createTable("founders", (founder) => {
    founder.increments("id");
    founder.string("founderFirstName");
    founder.string("founderLastName");
    founder.string("founderTitle");
    founder.integer("companyId").unsigned();
    founder
      .foreign("companyId")
      .references("id")
      .inTable("companies")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("founders");
};
