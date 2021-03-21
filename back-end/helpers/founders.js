const qp                    = require('../db/connect').query
const tx 		            = require('../db/connect').tx

module.exports = {
    createFounder,
}

async function createFounder({full_name, title, company_id}) {
    const sqlStr = "INSERT INTO founder(full_name, title, company_id)"  + 
                   "VALUES($1, $2, $3) RETURNING *";
    return qp(sqlStr,[full_name, title, company_id]);
}
