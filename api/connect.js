var mysql = require("mysql");
var pool = mysql.createPool({
  host: 'eyw6324oty5fsovx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: "yoqxd3r3av59i46v",
  password: "pvu7ypoidoj1xqv6",
  database: "w5wq7ozfs572jx76",
  connectionLimit: 10
});

module.exports = {
  pool
};
