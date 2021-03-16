var mysql = require("mysql");
var pool = mysql.createPool({
  host: process.env.JAWSDB_HOST || 'eyw6324oty5fsovx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: process.env.JAWSDB_USER || "yoqxd3r3av59i46v",
  password: process.env.JAWSDB_PASSWORD || "pvu7ypoidoj1xqv6",
  database: process.env.JAWSDB_DB || "w5wq7ozfs572jx76",
  connectionLimit: 10
});

module.exports = {
  pool
};
