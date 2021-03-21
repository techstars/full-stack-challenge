const pgp = require('pg-promise')();

const connection = {
	host: process.env.DB_HOST,
	port: '5432',
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	max: 5000
};

const db = pgp(connection);


function query(queryString, params, useDb2) {
	return (db).any(queryString, params)
}

function tx(promisesArr) {
	if (!promisesArr.length) {
		return Promise.reject({ error: "First argument must be array of promises." })
	}

	return (db).tx(t => {
		return t.batch(promisesArr)
			.then(data => {
				return data.length > 1 ? data : data[0];
			})
	})
}

module.exports = {
	query,
	tx
};
