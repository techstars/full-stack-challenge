module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/companyDirectory",
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
