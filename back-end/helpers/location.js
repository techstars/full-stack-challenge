const qp        = require('../db/connect').query
const tx 		= require('../db/connect').tx

module.exports = {
    createLocation,
    updateLocation,
    deleteLocationBy
}

function createLocation({city, state}) {
    const sqlStr = "INSERT INTO location(city, state)" +
                   "VALUES($1,$2) RETURNING *"; 
    return qp(sqlStr,[city,state]);
}

function updateLocation({city, state, id}) {
    const sqlStr = "UPDATE location SET city = $1, state = $2, date_updated = now() " +
                   "WHERE id = $3 RETURNING *"; 
    return qp(sqlStr,[city,state, id]);
}

function deleteLocationBy({id}) {
    sqlStr = "DELETE from location WHERE id = $1 RETURNING *";
    return qp(sqlStr, [id]);
}