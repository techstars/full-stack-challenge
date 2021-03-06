exports.up = function (knex) {
  return knex.schema.createTable("companies", (company) => {
    company.increments("id");
    company.string("companyName");
    company.string("companyCity");
    company.string("companyState");
    company.string("companyDescription");
    company.date("foundedDate");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("companies");
};
