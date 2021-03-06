const database = require("./database-connection");

module.exports = {
  listAllCompanies() {
    return database("companies");
  },
  getCompaniesById(id) {
    return database("companies").where("id", id).first();
  },
  createCompany(company) {
    return database("companies").insert(company).returning("*");
  },
  deleteCompany(id) {
    return database("companies").where("id", id).delete();
  },
  updateCompany(id, company) {
    return database("companies").where("id", id).update(company).returning("*");
  },
  listAllFounders() {
    return database("founders");
  },
  getFoundersById(id) {
    return database("founders").where("id", id).first();
  },
  createFounder(founder) {
    return database("founders").insert(founder).returning("*");
  },
  deleteFounder(id) {
    return database("founders").where("id", id).delete();
  },
  updateFounder(id, founder) {
    return database("founders").where("id", id).update(founder).returning("*");
  },
};
